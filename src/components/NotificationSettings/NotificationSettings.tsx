import { useState, useEffect } from 'react';
import { Bell, BellOff, Clock, Calendar, X } from 'lucide-react';
import {
  requestNotificationPermission,
  canSendNotifications,
  getNotificationSchedules,
  saveNotificationSchedule,
  removeNotificationSchedule,
  createDefaultWorkoutSchedule,
  type NotificationSchedule
} from '../../utils/notificationService';
import { useToast } from '../../contexts/ToastContext';
import styles from './NotificationSettings.module.css';

export const NotificationSettings = () => {
  const [hasPermission, setHasPermission] = useState(canSendNotifications());
  const [schedules, setSchedules] = useState<NotificationSchedule[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const { showToast } = useToast();

  const loadSchedules = () => {
    setSchedules(getNotificationSchedules());
  };

  useEffect(() => {
    loadSchedules();
  }, []);

  const handleRequestPermission = async () => {
    const granted = await requestNotificationPermission();
    setHasPermission(granted);
    if (granted) {
      showToast('Permissão de notificações concedida!', 'success');
    } else {
      showToast('Permissão de notificações negada', 'error');
    }
  };

  const handleToggleSchedule = (id: string) => {
    const schedule = schedules.find(s => s.id === id);
    if (schedule) {
      schedule.enabled = !schedule.enabled;
      saveNotificationSchedule(schedule);
      loadSchedules();
      showToast(
        schedule.enabled ? 'Notificação ativada' : 'Notificação desativada',
        'success'
      );
    }
  };

  const handleRemoveSchedule = (id: string) => {
    removeNotificationSchedule(id);
    loadSchedules();
    showToast('Notificação removida', 'success');
  };

  const handleAddWorkoutReminder = (workoutName: string, time: string, days: number[]) => {
    const schedule = createDefaultWorkoutSchedule(workoutName, time, days);
    saveNotificationSchedule(schedule);
    loadSchedules();
    setShowAddForm(false);
    showToast('Lembrete de treino adicionado!', 'success');
  };

  const DAYS = [
    { value: 0, label: 'Dom' },
    { value: 1, label: 'Seg' },
    { value: 2, label: 'Ter' },
    { value: 3, label: 'Qua' },
    { value: 4, label: 'Qui' },
    { value: 5, label: 'Sex' },
    { value: 6, label: 'Sáb' }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <Bell size={24} strokeWidth={2} />
          Notificações
        </h3>
      </div>

      {!hasPermission && (
        <div className={styles.permissionBox}>
          <BellOff size={32} strokeWidth={2} />
          <p>Notificações não estão ativadas</p>
          <button
            onClick={handleRequestPermission}
            className={styles.permissionButton}
          >
            Ativar Notificações
          </button>
        </div>
      )}

      {hasPermission && (
        <>
          <div className={styles.schedulesList}>
            {schedules.length === 0 ? (
              <div className={styles.emptyState}>
                <Bell size={48} strokeWidth={1.5} />
                <p>Nenhuma notificação agendada</p>
                <p className={styles.emptySubtext}>
                  Adicione lembretes para não esquecer seus treinos
                </p>
              </div>
            ) : (
              schedules.map(schedule => (
                <div key={schedule.id} className={styles.scheduleCard}>
                  <div className={styles.scheduleHeader}>
                    <div className={styles.scheduleInfo}>
                      <h4 className={styles.scheduleTitle}>
                        {schedule.config.title}
                      </h4>
                      <p className={styles.scheduleBody}>
                        {schedule.config.body}
                      </p>
                      <div className={styles.scheduleMeta}>
                        <Clock size={16} strokeWidth={2} />
                        <span>{schedule.time}</span>
                        <Calendar size={16} strokeWidth={2} />
                        <span>
                          {schedule.days
                            .map(d => DAYS[d].label)
                            .join(', ')}
                        </span>
                      </div>
                    </div>
                    <div className={styles.scheduleActions}>
                      <button
                        onClick={() => handleToggleSchedule(schedule.id)}
                        className={`${styles.toggleButton} ${schedule.enabled ? styles.enabled : ''}`}
                        aria-label={schedule.enabled ? 'Desativar' : 'Ativar'}
                      >
                        {schedule.enabled ? (
                          <Bell size={20} strokeWidth={2} />
                        ) : (
                          <BellOff size={20} strokeWidth={2} />
                        )}
                      </button>
                      <button
                        onClick={() => handleRemoveSchedule(schedule.id)}
                        className={styles.removeButton}
                        aria-label="Remover"
                      >
                        <X size={20} strokeWidth={2} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className={styles.addButton}
          >
            {showAddForm ? 'Cancelar' : '+ Adicionar Lembrete'}
          </button>

          {showAddForm && (
            <QuickAddForm
              onAdd={handleAddWorkoutReminder}
              onCancel={() => setShowAddForm(false)}
            />
          )}
        </>
      )}
    </div>
  );
};

interface QuickAddFormProps {
  onAdd: (workoutName: string, time: string, days: number[]) => void;
  onCancel: () => void;
}

const QuickAddForm = ({ onAdd, onCancel }: QuickAddFormProps) => {
  const [workoutName, setWorkoutName] = useState('');
  const [time, setTime] = useState('18:00');
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 3, 5]); // Seg, Qua, Sex

  const DAYS = [
    { value: 0, label: 'Dom' },
    { value: 1, label: 'Seg' },
    { value: 2, label: 'Ter' },
    { value: 3, label: 'Qua' },
    { value: 4, label: 'Qui' },
    { value: 5, label: 'Sex' },
    { value: 6, label: 'Sáb' }
  ];

  const toggleDay = (day: number) => {
    setSelectedDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };

  const handleSubmit = () => {
    if (!workoutName.trim() || selectedDays.length === 0) {
      return;
    }
    onAdd(workoutName, time, selectedDays);
    setWorkoutName('');
    setTime('18:00');
    setSelectedDays([1, 3, 5]);
  };

  return (
    <div className={styles.addForm}>
      <input
        type="text"
        placeholder="Nome do treino (ex: Treino A)"
        value={workoutName}
        onChange={(e) => setWorkoutName(e.target.value)}
        className={styles.formInput}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className={styles.formInput}
      />
      <div className={styles.daysSelector}>
        {DAYS.map(day => (
          <button
            key={day.value}
            onClick={() => toggleDay(day.value)}
            className={`${styles.dayButton} ${selectedDays.includes(day.value) ? styles.selected : ''}`}
          >
            {day.label}
          </button>
        ))}
      </div>
      <div className={styles.formActions}>
        <button onClick={onCancel} className={styles.cancelButton}>
          Cancelar
        </button>
        <button
          onClick={handleSubmit}
          className={styles.submitButton}
          disabled={!workoutName.trim() || selectedDays.length === 0}
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};

