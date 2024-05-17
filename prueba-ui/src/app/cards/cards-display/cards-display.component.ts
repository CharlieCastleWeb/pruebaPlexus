import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { City } from '../../models/city';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-cards-display',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './cards-display.component.html',
  styleUrl: './cards-display.component.scss'
})
export class CardsDisplayComponent implements OnInit {
  cities: City[] = [];
  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.getCities();
    console.log(this.cities);
    
  }

  getCities(): void {
    this.cities = this.citiesService.getCities();
  }
}
