import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons.module/icons.module-module';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-proyectos',
  imports: [IconsModule, AnimateOnScrollDirective, TranslatePipe],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.scss',
})
export class Proyectos {}
