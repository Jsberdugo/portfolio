import { IconsModule } from './../../shared/icons.module/icons.module-module';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll';

@Component({
  selector: 'app-home',
  imports: [AnimateOnScrollDirective, IconsModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
