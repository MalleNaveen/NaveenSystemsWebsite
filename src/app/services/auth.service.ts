import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private platformId = inject(PLATFORM_ID);
  isLoggedIn = signal(false);
  userEmail = signal('');

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  login(email: string) {
    this.isLoggedIn.set(true);
    this.userEmail.set(email);
    if (this.isBrowser) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
    }
  }

  logout() {
    this.isLoggedIn.set(false);
    this.userEmail.set('');
    if (this.isBrowser) {
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
    }
  }

  checkAuthStatus() {
    if (this.isBrowser) {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const userEmail = localStorage.getItem('userEmail') || '';
      
      if (isLoggedIn) {
        this.isLoggedIn.set(true);
        this.userEmail.set(userEmail);
      }
    }
  }

  getUserEmail(): string | null {
    return this.userEmail() || null;
  }
}
