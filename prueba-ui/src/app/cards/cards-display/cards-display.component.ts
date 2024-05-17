import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-cards-display',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './cards-display.component.html',
  styleUrl: './cards-display.component.scss'
})
export class CardsDisplayComponent {

}
