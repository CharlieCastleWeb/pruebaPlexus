import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CardsDisplayComponent } from './cards/cards-display/cards-display.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, CardsDisplayComponent]
})
export class AppComponent {
  title = 'prueba-ui';
}
