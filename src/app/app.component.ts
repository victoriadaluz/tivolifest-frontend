import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { Component, signal, ViewChild, AfterViewInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonIcon } from '@ionic/angular/standalone';
import { NgFor, CommonModule } from '@angular/common';

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
export class AppComponent{
  currentIndex = 0;
  title = 'tivoli-front-end';
  showModal = false;
  currentGallery: { title: string; images: string[] } | null = null;
  buttons = [
    {
      key: 'simulador',
      title: 'Simulador Realidad virtual 6D',
      icon: 'Realidad-virtual.svg',
    },
    { key: 'pelotero', title: 'Pelotero', icon: 'Niños.svg' },
    {
      key: 'cancha',
      title: 'Cancha de futbol',
      icon: 'canchita-futbol.svg',
    },
    {
      key: 'pantalla',
      title: 'Pantalla interactiva',
      icon: 'pantalla-juegos.svg',
    },
    { key: 'cascada', title: 'Cascada', icon: 'Cascada.svg' },
    { key: 'playroom', title: 'Playroom', icon: 'Pool.svg' },
    { key: 'fichines', title: 'Fichines', icon: 'Fichines.svg' },
    { key: 'animacion', title: 'Animación', icon: 'Animacion.svg' },
    { key: 'pisoloco', title: 'Piso Loco', icon: 'pisoloco.svg' },
  ];
get safeCurrentGallery() {
    return this.currentGallery ?? { title: '', images: [] };
  }
  prevImage() {
    if (this.currentGallery?.images) {
      this.currentIndex =
        (this.currentIndex - 1 + this.currentGallery.images.length) %
        this.currentGallery.images.length;
    }
  }

  nextImage() {
    if (!this.currentGallery) return;
    this.currentIndex = (this.currentIndex + 1) % this.currentGallery.images.length;
  }
  openGallery(key: string, title: string) {
    // Mapeo de imágenes por categoría (nombres exactos de archivos)
    const imagesMap: { [key: string]: string[] } = {
      pelotero: [ 'pelotero_2.webp', 'pelotero_3.webp', 'pelotero_4.webp', 'pelotero_5.webp', 'pelotero_6.webp'],
      simulador: [
        'simulador_1.webp',
        'simulador_2.webp',
        'simulador_3.webp',
        'simulador_4.webp',
        'simulador_5.webp',
        'simulador_6.webp',
      ],
      cancha: ['canchafutbol_1.webp', 'canchafutbol_2.webp', 'canchafutbol_3.webp', 'canchafutbol_4.webp', 'canchafutbol_5.webp'],
      pantalla: [
        'pantalla_1.webp',
        'pantalla_2.webp',
        'pantalla_3.webp',
        'pantalla_4.webp',
        'pantalla_5.webp',
        'pantalla_6.webp',
      ],
      cascada: ['cascada_1.webp', 'cascada_2.webp'],
      playroom: ['playroom_1.webp', 'playroom_2.webp', 'playroom_3.webp', 'playroom_4.webp', 'playroom_5.webp', 'playroom_6.webp', 'playroom_7.webp'],
      fichines: ['fichines_1.webp', 'fichines_2.webp'],
      animacion: ['animacion_1.webp', 'animacion_2.webp', 'animacion_3.webp'],
      pisoloco: [
        'pisoloco_1.webp',
        'pisoloco_2.webp',
        'pisoloco_3.webp',
        'pisoloco_4.webp',
        'pisoloco_5.webp',
      ],
      robots: ['robots_1.webp', 'robots_2.webp', 'robots_3.webp', 'robots_4.webp', 'robots_5.webp', 'robots_7.webp', 'robots_8.webp', 'robots_9.webp'],
      samba: [
        'samba_1.webp',
        'samba_2.webp',
        'samba_3.webp',
        'samba_4.webp',
        'samba_5.webp',
        'samba_6.webp',
        'samba_7.webp',
        'samba_8.webp',
      ],
    };
    const folder = key.toLowerCase().replace(/\s+/g, '');
    const images = imagesMap[folder]?.map(img => `assets/${folder}/${img}`) || [];
    this.currentGallery = {
      title: title,
      images:images
    };
    this.currentIndex = 0;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.currentGallery = null;
  }
}
