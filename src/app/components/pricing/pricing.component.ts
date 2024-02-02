import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  page = {
    title: "We have the right package for you",
    description: "",
    titleTag: "YOUR CHOICE",
    url: "",
    buttonText: "",
    plans: [
      { id: 1, name: "Personal", tag: "The standard version", price: "19",  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", buttonText: "BUY TODAY", featured: false,
      options: [ "5 Downloads", "2 Extensions", "Tutorials", "Forum Support", "1 year free updates" ]
      },
      { id: 2, name: "Student", tag: "Most popular choice", price: "29",  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", buttonText: "BUY TODAY", featured: true,
      options: [ "15 Downloads", "5 Extensions", "Tutorials with files", "Forum Support", "3 year free updates" ]
      },
      { id: 3, name: "Business", tag: "For the whole team", price: "49",  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", buttonText: "BUY TODAY", featured: false,
      options: [ "Unlimited Downloads", "Unlimited Extensions", "HD Video Tutorials", "Chat Support", "Lifetime free updates" ]
      }
    ]
  }
}
