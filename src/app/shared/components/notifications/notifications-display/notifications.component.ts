import { NotificationsService } from '../../../services/notifications.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  AnimatedNotification,
  Notification,
} from '@shared/models/notification.model';
import { AnimeTimelineInstance } from 'animejs';
import anime from 'animejs/lib/anime.es';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  displayedNotifications: AnimatedNotification[] = [];
  nextNotificationId = 0;
  animationFullLength = 3600; // in ms
  animationStartupLength = 900;
  constructor(
    private notificationsService: NotificationsService,
    private changeDetectionRef: ChangeDetectorRef
  ) {
    this.setupNotificationsListeners();
  }

  setupNotificationsListeners() {
    this.setupNotificationsPushListener();
    this.setupNotificationsRemoveListener();
  }

  setupNotificationsPushListener() {
    let notification: AnimatedNotification;
    this.notificationsService.notificationsPushEmitter.subscribe(
      (pushedNotification) => {
        notification = this.getNewAnimatedNotification(pushedNotification);
        this.displayedNotifications = [
          ...this.displayedNotifications,
          notification,
        ];
        this.changeDetectionRef.detectChanges();
        notification.animation = this.getBaseAnimation(notification.id);
      }
    );
  }

  setupNotificationsRemoveListener() {
    this.notificationsService.notificationsDeleteEmitter.subscribe((id) => {
      this.displayedNotifications = this.displayedNotifications.filter(
        (notification) => notification.id !== id
      );
      this.changeDetectionRef.detectChanges();
    });
  }

  getNewAnimatedNotification(notification: Notification): AnimatedNotification {
    return {
      ...notification,
      animation: null,
    };
  }

  getBaseAnimation(id: string): AnimeTimelineInstance {
    const element = document.getElementById(id) as HTMLElement;
    const animation = anime.timeline({
      duration: this.animationFullLength,
      easing: 'easeOutElastic(1, .8)',
      autoplay: true,
      complete: () => this.removeNotification(id),
    });
    animation
      .add({
        targets: element,
        right: '-550px',
        duration: 0,
      })
      .add({
        targets: element,
        right: '0px',
        duration: this.animationStartupLength,
      })
      .add({
        targets: element,
        right: '0px',
      })
      .add({
        targets: element,
        right: '-550px',
        duration: this.animationStartupLength,
      });
    return animation;
  }

  removeNotification(id: string) {
    this.notificationsService.removeNotification(id);
  }
}
