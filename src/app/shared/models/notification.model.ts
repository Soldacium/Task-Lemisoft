import { AnimeTimelineInstance } from 'animejs';
export interface Notification {
  title: string;
  message: string;
  id: string;
  type: NotificationTypes;
}

export interface AnimatedNotification extends Notification {
  animation: AnimeTimelineInstance | null;
}

export type NotificationTypes = 'success' | 'error' | 'information';
