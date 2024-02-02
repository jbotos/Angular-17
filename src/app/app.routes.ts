import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
    { title: "Home", path: '', component: HeaderComponent },
    { title: "About", path: 'about', component: AboutComponent },
    { title: "Clients", path: 'clients', component: ClientsComponent },
    { title: "Pricing", path: 'pricing', component: PricingComponent },
    { title: "Testimonials", path: 'testimonials', component: TestimonialsComponent },
    { title: "Gallery", path: 'gallery', component: GalleryComponent },
    { title: "Services", path: 'services', component: ServicesComponent },
    { title: "Page Not Found", path:'**' , component: NotfoundComponent},
];
