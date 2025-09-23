import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons.module/icons.module-module';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll';

@Component({
  selector: 'app-proyectos',
  imports: [IconsModule, AnimateOnScrollDirective],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {}
