import { Component, HostListener, signal } from '@angular/core';
import { IconsModule } from './shared/icons.module/icons.module-module';
import { SobreMi } from './components/sobre-mi/sobre-mi';
import { Experiencia } from './components/experiencia/experiencia';
import { Home } from './components/home/home';
import { Header } from './components/header/header';
import { Proyectos } from './components/proyectos/proyectos';
import { Contacto } from './components/contacto/contacto';
import { Footer } from './components/footer/footer';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  imports: [
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

  private cursor!: HTMLElement;
  private mouseX = 0;
  private mouseY = 0;
  private currentX = 0;
  private currentY = 0;
  private speed = 0.15; // delay suave
  private sectionSpeeds: { [key: string]: number } = {
    // lento
    'sobre-mi': 1, // un poco más rápido
    'yellow-section': 1,
  };
  ngAfterViewInit(): void {
    this.cursor = document.getElementById('cursor')!;
    this.animate();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    // Detectar si pasa por sección amarilla
    const el = document.elementFromPoint(event.clientX, event.clientY);
    if (el && el.closest('.yellow-section')) {
      this.cursor.classList.add('invert');
    } else {
      this.cursor.classList.remove('invert');
    }

    // Ajustar velocidad según sección detectada
    if (el) {
      for (const sectionClass in this.sectionSpeeds) {
        if (el.closest(`.${sectionClass}`)) {
          this.speed = this.sectionSpeeds[sectionClass];
          break;
        } else {
          this.speed = 0.15;
        }
      }
    }
  }

  private animate(): void {
    this.currentX += (this.mouseX - this.currentX) * this.speed;
    this.currentY += (this.mouseY - this.currentY) * this.speed;

    this.cursor.style.transform = `translate(${this.currentX}px, ${this.currentY}px)`;

    requestAnimationFrame(() => this.animate());
  }

  constructor(private translate: TranslateService) {
    // lee elección guardada o usa idioma del navegador
    const saved = localStorage.getItem('app_lang');
    const browser = navigator.language.split('-')[0];
    const initial = saved || (['en', 'es'].includes(browser) ? browser : 'es');

    this.translate.use(initial); // activa idioma sin recargar
  }
}
