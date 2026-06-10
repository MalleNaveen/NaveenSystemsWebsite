import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitted = false;

  contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      details: '123 Tech Street, Silicon Valley, CA 94025'
    },
    {
      icon: '📞',
      title: 'Phone',
      details: '+1 (555) 123-4567'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'info@naveensystems.com'
    }
  ];

  submitForm() {
    if (this.formData.name && this.formData.email && this.formData.message) {
      this.submitted = true;
      // Reset form after submission
      setTimeout(() => {
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        };
        this.submitted = false;
      }, 3000);
    }
  }
}
