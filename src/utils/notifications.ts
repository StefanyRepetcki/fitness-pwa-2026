// Sistema de Notificações PWA

export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    // Navegador não suporta notificações
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

export const showNotification = (title: string, options?: NotificationOptions) => {
  if (Notification.permission === 'granted') {
    new Notification(title, {
      icon: '/pwa-192x192.png',
      badge: '/pwa-192x192.png',
      tag: 'ciclei-notification',
      ...options
    });
  }
};

export const scheduleWorkoutReminder = (hour: number, minute: number = 0) => {
  // Verificar se já passou o horário hoje
  const now = new Date();
  const reminderTime = new Date();
  reminderTime.setHours(hour, minute, 0, 0);

  if (reminderTime <= now) {
    // Se já passou, agendar para amanhã
    reminderTime.setDate(reminderTime.getDate() + 1);
  }

  const timeUntilReminder = reminderTime.getTime() - now.getTime();

  setTimeout(() => {
    showNotification('💪 Hora do Treino!', {
      body: 'Que tal fazer seu treino de hoje?',
      requireInteraction: false
    });
  }, timeUntilReminder);
};

export const showWorkoutCompleteNotification = () => {
  showNotification('🎉 Treino Completo!', {
    body: 'Parabéns! Você completou mais um treino!',
    requireInteraction: false
  });
};

export const showStreakNotification = (days: number) => {
  if (days > 0 && days % 7 === 0) {
    showNotification(`🔥 ${days} Dias Seguidos!`, {
      body: 'Você está no caminho certo! Continue assim!',
      requireInteraction: false
    });
  }
};

