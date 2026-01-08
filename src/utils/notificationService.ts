/**
 * Sistema de Notificações Inteligente
 * Gerencia notificações PWA, lembretes de treino, suplementos e streaks
 */

export interface NotificationConfig {
  id: string;
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string; // Para agrupar notificações similares
  requireInteraction?: boolean;
  silent?: boolean;
  vibrate?: number[];
  data?: Record<string, unknown>;
  actions?: Array<{
    action: string;
    title: string;
    icon?: string;
  }>;
}

export interface NotificationSchedule {
  id: string;
  type: 'workout' | 'supplement' | 'streak' | 'reminder';
  time: string; // HH:mm formato 24h
  days: number[]; // 0 = Domingo, 1 = Segunda, etc.
  enabled: boolean;
  config: NotificationConfig;
}

const NOTIFICATION_PERMISSION_KEY = 'ciclei-notification-permission-requested';
const NOTIFICATION_SCHEDULES_KEY = 'notification-schedules';

/**
 * Solicita permissão para notificações
 */
export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    console.warn('Este navegador não suporta notificações');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission === 'denied') {
    console.warn('Permissão de notificações foi negada');
    return false;
  }

  try {
    const permission = await Notification.requestPermission();
    localStorage.setItem(NOTIFICATION_PERMISSION_KEY, 'true');
    return permission === 'granted';
  } catch (error) {
    console.error('Erro ao solicitar permissão de notificações:', error);
    return false;
  }
};

/**
 * Verifica se notificações estão disponíveis e permitidas
 */
export const canSendNotifications = (): boolean => {
  return (
    'Notification' in window &&
    Notification.permission === 'granted' &&
    'serviceWorker' in navigator
  );
};

/**
 * Envia uma notificação
 */
export const sendNotification = async (config: NotificationConfig): Promise<void> => {
  if (!canSendNotifications()) {
    console.warn('Notificações não estão disponíveis ou permitidas');
    return;
  }

  try {
    // Registrar service worker se necessário
    if ('serviceWorker' in navigator) {
      const registration = await navigator.serviceWorker.ready;
      
      const notificationOptions: NotificationOptions = {
        body: config.body,
        icon: config.icon || '/pwa-192x192.png',
        badge: config.badge || '/pwa-192x192.png',
        tag: config.tag,
        requireInteraction: config.requireInteraction || false,
        silent: config.silent || false,
        data: config.data || {}
      };

      // vibrate só funciona em alguns navegadores, usar data para passar
      if (config.vibrate && 'vibrate' in navigator) {
        navigator.vibrate(config.vibrate);
      }

      await registration.showNotification(config.title, notificationOptions);
    } else {
      // Fallback para notificação do navegador
      new Notification(config.title, {
        body: config.body,
        icon: config.icon || '/pwa-192x192.png',
        tag: config.tag
      });
    }
  } catch (error) {
    console.error('Erro ao enviar notificação:', error);
  }
};

/**
 * Notificação de treino
 */
export const sendWorkoutNotification = async (
  workoutName: string,
  scheduledTime?: string
): Promise<void> => {
  const timeText = scheduledTime ? ` às ${scheduledTime}` : '';
  
  await sendNotification({
    id: `workout-${Date.now()}`,
    title: '💪 Hora do Treino!',
    body: `Não esqueça: ${workoutName}${timeText}`,
    tag: 'workout-reminder',
    vibrate: [200, 100, 200, 100, 200],
    data: {
      type: 'workout',
      workoutName
    }
  });
};

/**
 * Notificação de suplemento
 */
export const sendSupplementNotification = async (
  supplementName: string,
  time: string
): Promise<void> => {
  await sendNotification({
    id: `supplement-${Date.now()}`,
    title: '💊 Lembrete de Suplemento',
    body: `Hora de tomar: ${supplementName}`,
    tag: 'supplement-reminder',
    vibrate: [100, 50, 100],
    data: {
      type: 'supplement',
      supplementName,
      time
    }
  });
};

/**
 * Notificação de streak
 */
export const sendStreakNotification = async (days: number): Promise<void> => {
  await sendNotification({
    id: `streak-${Date.now()}`,
    title: '🔥 Sequência Mantida!',
    body: `Parabéns! Você está há ${days} ${days === 1 ? 'dia' : 'dias'} seguidos treinando!`,
    tag: 'streak',
    vibrate: [300, 100, 300],
    data: {
      type: 'streak',
      days
    }
  });
};

/**
 * Notificação de parabéns por completar treino
 */
export const sendWorkoutCompletedNotification = async (
  workoutName: string
): Promise<void> => {
  await sendNotification({
    id: `completed-${Date.now()}`,
    title: '✅ Treino Completo!',
    body: `Parabéns! Você completou: ${workoutName}`,
    tag: 'workout-completed',
    vibrate: [200, 100, 200],
    data: {
      type: 'workout-completed',
      workoutName
    }
  });
};

/**
 * Salva um agendamento de notificação
 */
export const saveNotificationSchedule = (schedule: NotificationSchedule): void => {
  const schedules = getNotificationSchedules();
  const existingIndex = schedules.findIndex(s => s.id === schedule.id);
  
  if (existingIndex >= 0) {
    schedules[existingIndex] = schedule;
  } else {
    schedules.push(schedule);
  }
  
  localStorage.setItem(NOTIFICATION_SCHEDULES_KEY, JSON.stringify(schedules));
};

/**
 * Obtém todos os agendamentos
 */
export const getNotificationSchedules = (): NotificationSchedule[] => {
  try {
    const stored = localStorage.getItem(NOTIFICATION_SCHEDULES_KEY);
    if (stored) {
      return JSON.parse(stored) as NotificationSchedule[];
    }
  } catch (error) {
    console.error('Erro ao ler agendamentos:', error);
  }
  return [];
};

/**
 * Remove um agendamento
 */
export const removeNotificationSchedule = (id: string): void => {
  const schedules = getNotificationSchedules();
  const filtered = schedules.filter(s => s.id !== id);
  localStorage.setItem(NOTIFICATION_SCHEDULES_KEY, JSON.stringify(filtered));
};

/**
 * Verifica e envia notificações agendadas
 * Deve ser chamado periodicamente (ex: a cada minuto)
 */
export const checkScheduledNotifications = async (): Promise<void> => {
  if (!canSendNotifications()) {
    return;
  }

  const schedules = getNotificationSchedules();
  const now = new Date();
  const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const currentDay = now.getDay();

  for (const schedule of schedules) {
    if (!schedule.enabled) continue;
    if (!schedule.days.includes(currentDay)) continue;
    if (schedule.time !== currentTime) continue;

    // Verificar se já foi enviada hoje
    const lastSentKey = `notification-sent-${schedule.id}-${now.toISOString().split('T')[0]}`;
    if (localStorage.getItem(lastSentKey)) {
      continue;
    }

    // Enviar notificação
    await sendNotification(schedule.config);
    
    // Marcar como enviada
    localStorage.setItem(lastSentKey, 'true');
  }
};

/**
 * Inicializa o sistema de notificações
 * Deve ser chamado quando o app carrega
 */
export const initializeNotifications = async (): Promise<void> => {
  // Solicitar permissão se ainda não foi solicitada
  const permissionRequested = localStorage.getItem(NOTIFICATION_PERMISSION_KEY);
  if (!permissionRequested) {
    // Não solicitar automaticamente, apenas quando o usuário ativar
    // await requestNotificationPermission();
  }

  // Verificar notificações agendadas a cada minuto
  setInterval(() => {
    checkScheduledNotifications().catch(console.error);
  }, 60000); // 1 minuto

  // Verificar imediatamente
  await checkScheduledNotifications();
};

/**
 * Cria um agendamento padrão de treino
 */
export const createDefaultWorkoutSchedule = (
  workoutName: string,
  time: string,
  days: number[]
): NotificationSchedule => {
  return {
    id: `workout-${workoutName}-${time}`,
    type: 'workout',
    time,
    days,
    enabled: true,
    config: {
      id: `workout-${workoutName}-${time}`,
      title: '💪 Hora do Treino!',
      body: `Não esqueça: ${workoutName}`,
      tag: 'workout-reminder',
      vibrate: [200, 100, 200, 100, 200],
      data: {
        type: 'workout',
        workoutName
      }
    }
  };
};

