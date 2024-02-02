import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  page = {
    title: "",
    description: "",
    titleTag: "",
    url: "",
    buttonText: "",
    images: [
      { id: 1, src: "../assets/images/gallery-images/gallery-image-1.jpg", url: "", alt: "Landing Page"},
      { id: 2, src: "../assets/images/gallery-images/gallery-image-2.jpg", url: "", alt: "Landing Page"},
      { id: 3, src: "../assets/images/gallery-images/gallery-image-3.jpg", url: "", alt: "Landing Page"},
      { id: 4, src: "../assets/images/gallery-images/gallery-image-4.jpg", url: "", alt: "Landing Page"},
      { id: 5, src: "../assets/images/gallery-images/gallery-image-5.jpg", url: "", alt: "Landing Page"},
      { id: 6, src: "../assets/images/gallery-images/gallery-image-6.jpg", url: "", alt: "Landing Page"}
    ]
  }
}
