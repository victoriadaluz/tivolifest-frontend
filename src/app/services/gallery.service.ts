import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private galleries: { [key: string]: string[] } = {
    pelotero: ['pelotero1.jpg', 'pelotero2.jpg', 'pelotero3.jpg'],
    robots: ['robot1.jpg', 'robot2.jpg'],
    // Agrega más galerías según tus botones
  };

  getImages(galleryKey: string): string[] {
    return this.galleries[galleryKey] || [];
  }
}