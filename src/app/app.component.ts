import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonIcon } from '@ionic/angular/standalone';
@Component({
  /*decorador afecta a la clase appcomponent. es un patrón decoradorx */
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrouselComponent, MatExpansionModule, IonIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tivoli-front-end';
  readonly panelOpenState = signal(false);
}
