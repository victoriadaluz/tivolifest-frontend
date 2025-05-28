import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonIcon } from '@ionic/angular/standalone';
import { GalleryService } from './services/gallery.service';
import { NgFor, CommonModule } from '@angular/common';
import { ViewChild } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CarrouselComponent,
    MatExpansionModule,
    IonIcon,
    NgFor,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild('modal') modal!: GalleryComponent;
  title = 'tivoli-front-end';
  buttons = [
    {
      key: 'simulador',
      title: 'Simulador Realidad virtual 6D',
      icon: 'Realidad-virtual.svg',
    },
    { key: 'pelotero', title: 'Pelotero', icon: 'Niños.svg' },
    {
      key: 'cancha de futbol',
      title: 'Cancha de futbol',
      icon: 'canchita-futbol.svg',
    },
    {
      key: 'pantalla interactiva',
      title: 'Pantalla interactiva',
      icon: 'pantalla-juegos.svg',
    },
    { key: 'cascada', title: 'Cascada', icon: 'Cascada.svg' },
    { key: 'playroom', title: 'Playroom', icon: 'Pool.svg' },
    { key: 'fichines', title: 'Fichines', icon: 'Fichines.svg' },
    { key: 'animacion', title: 'Animación', icon: 'Animacion.svg' },
    { key: 'pisoloco', title: 'Piso Loco', icon: 'pisoloco.svg' },
  ];
  currentGallery: { title: string; images: string[] } | null = null;
  showModal = false;

  readonly panelOpenState = signal(false);
  constructor(private galleryService: GalleryService) {}

openGallery(key: string, title: string) {
  // Mapeo de nombres de botón a carpetas (si difieren)
  const folderNames: {[key: string]: string} = {
    'cancha de futbol': 'cancha',
    'pantalla interactiva': 'pantalla',
    'piso loco': 'pisoloco',
    'pelotero': 'pelotero',
    'samba': 'samba',
    'robots': 'robots',
    'playroom': 'playroom',
    'cascada': 'cascada',
    'fichines': 'fichines',
    'simulador': 'simulador'
    // Agrega otros mapeos si los nombres no coinciden
  };

  // Obtiene el nombre de la carpeta o usa el key por defecto
  const folder = folderNames[key] || key.toLowerCase();

  // Mapeo de imágenes por categoría (nombres exactos de archivos)
  const imagesMap: {[key: string]: string[]} = {
    pelotero: ['pelotero_1.jpg', 'pelotero_2.jpg', 'pelotero_3.jpg'],
    simulador: ['simulador_1.jpg', 'simulador_2.jpg'],
    cancha: ['cancha_1.jpg', 'cancha_2.jpg'],
    pantalla: ['pantalla_1.jpg', 'pantalla_2.jpg'],
    cascada: ['cascada_1.jpg', 'cascada_2.jpg'],
    playroom: ['playroom_1.jpg', 'playroom_2.jpg'],
    fichines: ['fichines_1.jpg', 'fichines_2.jpg'],
    animacion: ['animacion_1.jpg', 'animacion_2.jpg'],
    pisoloco: ['pisoloco_1.jpg', 'pisoloco_2.jpg'],
    robots: ['robot_1.JPG', 'robot_2.JPG'],
    samba: ['samba_1.jpg', 'samba_2.jpg']
  };

  this.currentGallery = {
    title: title,
    images: imagesMap[folder]?.map(img => `assets/${folder}/${img}`) || []
  };
  this.showModal = true;
}
closeModal() {
  this.showModal = false;
  this.currentGallery = null;
}
}


