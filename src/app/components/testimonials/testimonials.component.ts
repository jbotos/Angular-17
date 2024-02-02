import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  page = {
    title: "What our customers are saying",
    description: "",
    titleTag: "FEEDBACK",
    url: "",
    buttonText: "",
    testimonials: [
      { id: 1, name: "John Doe", title: "Happy Customer", src: "../assets/images/user-images/user-1.jpg", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
      { id: 2, name: "Roslyn Doe", title: "Happy Customer", src: "../assets/images/user-images/user-2.jpg", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"},
      { id: 3, name: "Thomas Doe", title: "Happy Customer", src: "../assets/images/user-images/user-3.jpg", summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
    ]
  }
}
