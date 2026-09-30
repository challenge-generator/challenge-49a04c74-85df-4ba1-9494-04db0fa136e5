import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Signal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationConfig {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  dismissible?: boolean;
  action?: {
    label: string;
    callback: () => void;
  };
}

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
  @Input() set notification(value: NotificationConfig | null) {
    this._notification.set(value);
    if (value) {
      this.initializeAutoDismiss();
    }
  }

  @Output() dismiss = new EventEmitter<string>();
  @Output() actionClick = new EventEmitter<string>();

  private readonly _notification = signal<NotificationConfig | null>(null);
  private autoDismissTimer: ReturnType<typeof setTimeout> | null = null;

  readonly notification: Signal<NotificationConfig | null> = this._notification;
  readonly isVisible = computed(() => this._notification() !== null);

  readonly iconClass = computed(() => {
    const type = this._notification()?.type;
    switch (type) {
      case 'success': return 'check-circle';
      case 'error': return 'error';
      case 'warning': return 'warning';
      case 'info':
      default: return 'info';
    }
  });

  readonly containerClass = computed(() => {
    const type = this._notification()?.type ?? 'info';
    return `notification-${type}`;
  });

  private initializeAutoDismiss(): void {
    if (this.autoDismissTimer) {
      clearTimeout(this.autoDismissTimer);
    }

    const notification = this._notification();
    if (notification?.duration && notification.duration > 0) {
      this.autoDismissTimer = setTimeout(() => {
        this.dismissNotification();
      }, notification.duration);
    }
  }

  dismissNotification(): void {
    const notification = this._notification();
    if (notification) {
      this.dismiss.emit(notification.id);
      this._notification.set(null);
    }
  }

  onActionClick(): void {
    const notification = this._notification();
    if (notification?.action) {
      this.actionClick.emit(notification.id);
      notification.action.callback();
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.dismissNotification();
    }
  }
}