import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from './shared/icons.module/icons.module-module';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Experiencia } from './components/experiencia/experiencia';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Proyectos } from './components/proyectos/proyectos';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    IconsModule,
    SobreMi,
    Experiencia,
    Home,
    Header,
    Proyectos,
    Contacto,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portafolio');
}
