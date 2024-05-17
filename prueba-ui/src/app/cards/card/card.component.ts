import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { City } from '../../models/city';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})

export class CardComponent {
  @Input() city!: City;

  @ViewChild('expandBtn') expandBtn!: ElementRef;
  @ViewChild('cityDescription') cityDescription!: ElementRef;

  //Toggle expanded text
  toggleText() {
    this.expandBtn.nativeElement.classList.toggle('rotated');
    this.cityDescription.nativeElement.classList.toggle('cutoff-text');
    console.log("toggle");
  }
}
