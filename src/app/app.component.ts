import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
@Component({
  /*decorador afecta a la clase appcomponent. es un patrón decoradorx */
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tivoli-front-end';
}
