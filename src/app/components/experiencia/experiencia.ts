import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons.module/icons.module-module';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll';

@Component({
  selector: 'app-experiencia',
  imports: [IconsModule, AnimateOnScrollDirective],
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
})
export class Experiencia {}
