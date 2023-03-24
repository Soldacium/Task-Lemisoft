import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification/notification.component';
import { NotificationsComponent } from './notifications-display/notifications.component';

@NgModule({
  declarations: [NotificationsComponent, NotificationComponent],
  exports: [NotificationsComponent],
  imports: [CommonModule],
})
export class NotificationsModule {}
