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
      pelotero: ['pelotero_1.jpg', 'pelotero_2.jpg', 'pelotero_3.jpg', 'pelotero_4.jpg', 'pelotero_5.jpg', 'pelotero_6.jpg'],
      simulador: [
        'simulador_1.jpg',
        'simulador_2.JPG',
        'simulador_3.JPG',
        'simulador_4.JPG',
        'simulador_5.jpg',
        'simulador_6.JPG',
      ],
      cancha: ['canchafutbol_1.jpg', 'canchafutbol_2.jpg', 'canchafutbol_3.jpg', 'canchafutbol_4.jpg', 'canchafutbol_5.jpg'],
      pantalla: [
        'pantalla_1.jpg',
        'pantalla_2.jpg',
        'pantalla_3.jpg',
        'pantalla_4.jpg',
        'pantalla_5.jpg',
        'pantalla_6.jpg',
      ],
      cascada: ['cascada_1.jpg', 'cascada_2.jpg'],
      playroom: ['playroom_1.jpg', 'playroom_2.jpg', 'playroom_3.jpg', 'playroom_4.jpg', 'playroom_5.jpg', 'playroom_6.jpg', 'playroom_7.jpg'],
      fichines: ['fichines_1.jpg', 'fichines_2.jpg'],
      animacion: ['animacion_1.jpg', 'animacion_2.jpg', 'animacion_3.jpg'],
      pisoloco: [
        'pisoloco_1.jpg',
        'pisoloco_2.JPG',
        'pisoloco_3.JPG',
        'pisoloco_4.jpg',
        'pisoloco_5.JPG',
      ],
      robots: ['robots_1.JPG', 'robots_2.JPG', 'robots_3.JPG', 'robots_4.JPG', 'robots_5.jpg', 'robots_7.jpg', 'robots_8.jpg', 'robots_9.JPG'],
      samba: [
        'samba_1.jpg',
        'samba_2.jpg',
        'samba_3.DNG',
        'samba_4.DNG',
        'samba_5.jpg',
        'samba_6.jpg',
        'samba_7.jpg',
        'samba_8.jpg',
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
