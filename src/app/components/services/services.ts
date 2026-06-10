import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {
  services: Service[] = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Full-stack web application development using modern technologies and frameworks.',
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      icon: '📱'
    },
    {
      id: 3,
      title: 'Cloud Solutions',
      description: 'Cloud infrastructure, migration, and management services using AWS, Azure, and GCP.',
      icon: '☁️'
    },
    {
      id: 4,
      title: 'Data Analytics',
      description: 'Big data analysis, visualization, and insights to drive business decisions.',
      icon: '📊'
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      description: 'AI and ML solutions for predictive analytics, automation, and intelligent systems.',
      icon: '🤖'
    },
    {
      id: 6,
      title: 'Consulting & Support',
      description: 'Technical consulting, system architecture, and ongoing support services.',
      icon: '💼'
    }
  ];
}
