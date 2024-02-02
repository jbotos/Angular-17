import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  page = {
    title: "How We Help You To Sell Your Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!",
    titleTag: "SUCCESS",
    url: "",
    buttonText: "START CREATING TODAY",
    features: [
      { id: 1, icon: "fa-html5", title: "HTML5 &amp; CSS3", summary: "Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico"},
      { id: 2, icon: "fa-bolt", title: "Easy to Use", summary: "Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi"},
      { id: 3, icon: "fa-tablet", title: "Fully Responsive", summary: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"},
      { id: 4, icon: "fa-rocket", title: "Parallax Effect", summary: "Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum"}
    ]
  }
 

}
