import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Naveen Systems Pvt Ltd</h3>
          <p>Your trusted partner for premium car rental services.</p>
        </div>
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#login">Login</a></li>
            <li><a href="#cars">Our Fleet</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Contact Info</h4>
          <p>Email: info@naveensystems.com</p>
          <p>Phone: +91-1234-567-890</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 Naveen Systems Pvt Ltd. All rights reserved.</p>
      </div>
    </footer>
  `,
  styleUrl: './footer.css'
})
export class FooterComponent {}
