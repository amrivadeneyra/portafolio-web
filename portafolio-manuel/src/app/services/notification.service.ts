import { Injectable } from '@angular/core';

export interface NotificationOptions {
  readonly message: string;
  readonly type: 'success' | 'error' | 'info';
  readonly duration?: number;
  readonly position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private readonly defaultDuration: number = 3000;
  private readonly defaultPosition: string = 'top-right';

  public showNotification(options: NotificationOptions): void {
    const notification: HTMLDivElement = this.createNotificationElement(options);
    this.addNotificationToDOM(notification);
    this.scheduleNotificationRemoval(notification, options.duration || this.defaultDuration);
  }

  private createNotificationElement(options: NotificationOptions): HTMLDivElement {
    const notification: HTMLDivElement = document.createElement('div');
    const positionClass: string = this.getPositionClass(options.position || this.defaultPosition);
    const typeClass: string = this.getTypeClass(options.type);
    
    notification.className = `fixed ${positionClass} ${typeClass} text-white px-4 py-2 rounded-lg shadow-lg z-50 transition-opacity duration-300`;
    notification.textContent = options.message;
    
    return notification;
  }

  private getPositionClass(position: string): string {
    const positionMap: Record<string, string> = {
      'top-right': 'top-4 right-4',
      'top-left': 'top-4 left-4',
      'bottom-right': 'bottom-4 right-4',
      'bottom-left': 'bottom-4 left-4'
    };
    
    return positionMap[position] || positionMap['top-right'];
  }

  private getTypeClass(type: string): string {
    const typeMap: Record<string, string> = {
      'success': 'bg-green-500',
      'error': 'bg-red-500',
      'info': 'bg-blue-500'
    };
    
    return typeMap[type] || typeMap['info'];
  }

  private addNotificationToDOM(notification: HTMLDivElement): void {
    document.body.appendChild(notification);
  }

  private scheduleNotificationRemoval(notification: HTMLDivElement, duration: number): void {
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, duration);
  }
} 