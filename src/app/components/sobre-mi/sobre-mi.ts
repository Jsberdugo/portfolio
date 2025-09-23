import { Component } from '@angular/core';
import { IconsModule } from '../../shared/icons.module/icons.module-module';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll';

@Component({
  selector: 'app-sobre-mi',
  imports: [IconsModule, AnimateOnScrollDirective],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
})
export class SobreMi {}
