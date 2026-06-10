import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ServicesComponent } from '../services/services';
import { PortfolioComponent } from '../portfolio/portfolio';
import { AboutComponent } from '../about/about';
import { ContactComponent } from '../contact/contact';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent implements OnInit {
  userEmail: string | null = null;
  activeSection: string = 'home';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.userEmail = this.authService.getUserEmail();
  }

  navigateTo(section: string) {
    this.activeSection = section;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
