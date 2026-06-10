import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <h1>Naveen Systems Pvt Ltd</h1>
          <p class="tagline">Enterprise Software Solutions & Services</p>
        </div>
      </div>
    </header>
  `,
  styleUrl: './header.css'
})
export class HeaderComponent {}
