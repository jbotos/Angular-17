import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  page = {
    title: "A FREE AND SIMPLE LANDING PAGE",
    description: "Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!",
    titleTag: "",
    url: "",
    buttonText: "START CREATING TODAY"
  }
 
}
