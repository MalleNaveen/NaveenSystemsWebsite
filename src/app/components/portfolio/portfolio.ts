import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Multi-vendor e-commerce platform with advanced search and payment integration.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      imageUrl: '/images/ecommerce.jpg'
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'Patient management and appointment scheduling system for hospitals.',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'AWS'],
      imageUrl: '/images/healthcare.jpg'
    },
    {
      id: 3,
      title: 'Real-Time Analytics Dashboard',
      description: 'Live data visualization and reporting dashboard for business intelligence.',
      technologies: ['React', 'Python', 'Elasticsearch', 'Tableau'],
      imageUrl: '/images/analytics.jpg'
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with transaction management.',
      technologies: ['React Native', 'Node.js', 'Firebase', 'iOS/Android'],
      imageUrl: '/images/banking.jpg'
    },
    {
      id: 5,
      title: 'IoT Device Management',
      description: 'Cloud-based IoT platform for monitoring and controlling devices.',
      technologies: ['Angular', 'Node.js', 'MQTT', 'AWS IoT'],
      imageUrl: '/images/iot.jpg'
    },
    {
      id: 6,
      title: 'Enterprise CRM System',
      description: 'Customer relationship management system with sales pipeline tracking.',
      technologies: ['Salesforce', 'Apex', 'Lightning Web Components', 'Flows'],
      imageUrl: '/images/crm.jpg'
    }
  ];
}
