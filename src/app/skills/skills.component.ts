import { Component } from '@angular/core';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ProgressBarComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', percentage: 70 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'React', percentage: 80 },
    { name: 'Photoshop', percentage: 90 },
    { name: 'Adobe XD', percentage: 80 },
    { name: 'Node.js', percentage: 70 },
    { name: 'WordPress', percentage: 60 },
  ];
}
