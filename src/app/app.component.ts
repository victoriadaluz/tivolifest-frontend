import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  /*decorador afecta a la clase appcomponent. es un patrón decoradorx */
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrouselComponent, MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'tivoli-front-end';
  readonly panelOpenState = signal(false);
}
