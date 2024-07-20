import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss'
})
export class PortfolioCardComponent {
  @Input() field!: string;
  @Input() index!: number;
}
