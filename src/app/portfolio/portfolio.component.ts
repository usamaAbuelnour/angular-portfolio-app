import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../components/portfolio-card/portfolio-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioCardComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  fields = [
    'web design',
    'mobile design',
    'logo design',
    'web application development',
    'mobile application development',
    'pwa development',
  ];
}
