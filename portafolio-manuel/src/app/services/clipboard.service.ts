import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  public async copyToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      return false;
    }
  }

  public async readFromClipboard(): Promise<string> {
    try {
      return await navigator.clipboard.readText();
    } catch (error) {
      console.error('Error reading from clipboard:', error);
      return '';
    }
  }
} 