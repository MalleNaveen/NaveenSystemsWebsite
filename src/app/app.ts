import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Login } from './login/login';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Naveen Systems');

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.checkAuthStatus();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
