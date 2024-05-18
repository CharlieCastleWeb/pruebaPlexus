import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { City } from '../../models/city';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() city!: City; // Input to receive city data

  @ViewChild('expandBtn') expandBtn!: ElementRef; // Reference to the expand button element
  @ViewChild('cityDescription') cityDescription!: ElementRef; // Reference to the city description element

  // Method to toggle the expanded state of the city description
  toggleText() {
    // Toggle 'rotated' class on the expand button
    this.expandBtn.nativeElement.classList.toggle('rotated');

    // Toggle 'cutoff-text' and 'expanded' classes on the city description element
    this.cityDescription.nativeElement.classList.toggle('cutoff-text');
    this.cityDescription.nativeElement.classList.toggle('expanded');
  }
}
