import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Carousel } from "./carousel/carousel";
import { Accordion } from "./accordion/accordion";
import { Forms } from "./forms/forms";
import { Home } from "./home/home";
import { Contact } from './contact/contact';
import { About } from "./about/about";

@Component({
  selector: 'app-root',
  imports: [Navbar,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('treesa');
}
