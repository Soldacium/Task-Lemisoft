import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NotificationTypes } from '@shared/models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input('elementId') id: string = '';
  @Input() type: NotificationTypes = 'success';
  @Output() onClose = new EventEmitter<Event>();

  closeNotification(event: Event) {
    this.onClose.emit(event);
  }
}
