import { EventEmitter, Injectable } from '@angular/core';
import {
  Notification,
  NotificationTypes,
} from '@shared/models/notification.model';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class NotificationsService {
  private notifications: Notification[] = [];
  notificationsPushEmitter = new EventEmitter<Notification>();
  notificationsDeleteEmitter = new EventEmitter<string>(); // id

  constructor() {}

  pushNotification(
    title: string,
    message: string,
    type: NotificationTypes = 'success'
  ) {
    const newNotification: Notification = { title, message, id: v4(), type };
    this.notifications.push(newNotification);
    this.notificationsPushEmitter.emit(newNotification);
  }

  removeNotification(notificationId: string) {
    this.notificationsDeleteEmitter.emit(notificationId);
    this.notifications = this.notifications.filter(
      (notification) => notification.id !== notificationId
    );
  }
}
