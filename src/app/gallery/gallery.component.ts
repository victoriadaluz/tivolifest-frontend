import { Component, Input} from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  imports: [NgFor, NgIf, CommonModule]
})
export class GalleryComponent {
  @Input() images: string[] = [];
  @Input() title: string = '';
  isOpen = false;

  open(images: string[], title: string) {
    this.images = images;
    this.title = title;
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
