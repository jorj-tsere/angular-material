import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private notifier: NotifierService;

  constructor(private notifierService: NotifierService) {
    this.notifier = this.notifierService;
  }

  fakeAlertService(_message: string): void {
    // let newID = +(new Date().getSeconds());
    this.notifierService.show({
      type: 'success',
      message: _message,
    });
    console.log('[[ message from fake alert EFFECT ]]', _message);
  }

  public showNotification(message: string, type: string = 'info'): void {
    this.notifier.notify(type, message);
  }

  /**
   * Hide oldest notification
   */
  public hideOldestNotification(): void {
    this.notifier.hideOldest();
  }

  /**
   * Hide newest notification
   */
  public hideNewestNotification(): void {
    this.notifier.hideNewest();
  }

  /**
   * Hide all notifications at once
   */
  public hideAllNotifications(): void {
    this.notifier.hideAll();
  }

  /**
   * Show a specific notification (with a custom notification ID)
   *
   * @param string type    Notification type
   * @param string message Notification message
   * @param string id      Notification ID
   */
  public showSpecificNotification(
    type: string,
    message: string,
    id: string
  ): void {
    this.notifier.show({
      id,
      message,
      type,
    });
  }

  /**
   * Hide a specific notification (by a given notification ID)
   *
   * @param string id Notification ID
   */
  public hideSpecificNotification(id: string): void {
    this.notifier.hide(id);
  }
}
