import { LastTrainingSession } from '@/types/TrainingSession/training.types';

export function formatTimestamp(lastTrainingSession: LastTrainingSession | undefined): string {
  if (!lastTrainingSession) {
    return 'Invalid timestamp';
  }

  const { seconds, nanoseconds } = lastTrainingSession;
  const date = new Date(seconds * 1000);
  const now = new Date();

  const isToday = now.toDateString() === date.toDateString();
  const isYesterday =
    new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).toDateString() ===
    date.toDateString();

  const formattedTime = date.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });

  if (isToday) {
    return `Today, ${formattedTime}`;
  } else if (isYesterday) {
    return `Yesterday, ${formattedTime}`;
  } else {
    return `${date.toLocaleDateString('uk-UA')}, ${formattedTime}`;
  }
}
