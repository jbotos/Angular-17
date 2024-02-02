import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  page = {
    title: "Companies who use our services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    titleTag: "TRUST",
    url: "",
    buttonText: "",
    clients: [
      { id: 1, name: "Tree", src: "../assets/images/company-images/company-logo1.png"},
      { id: 2, name: "Fingerprint", src: "../assets/images/company-images/company-logo2.png"},
      { id: 3, name: "Pac Man", src: "../assets/images/company-images/company-logo3.png"},
      { id: 4, name: "Mustache", src: "../assets/images/company-images/company-logo4.png"},
      { id: 5, name: "Goat", src: "../assets/images/company-images/company-logo5.png"},
      { id: 6, name: "Justice", src: "../assets/images/company-images/company-logo6.png"},
      { id: 7, name: "Ball", src: "../assets/images/company-images/company-logo7.png"},
      { id: 8, name: "Cold", src: "../assets/images/company-images/company-logo8.png"},
      { id: 9, name: "Apple", src: "../assets/images/company-images/company-logo9.png"},
    ]
  }
}             
 
 