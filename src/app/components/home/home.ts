import { IconsModule } from './../../shared/icons.module/icons.module-module';
import { Component } from '@angular/core';
import { AnimateOnScrollDirective } from '../../shared/directives/animate-on-scroll';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  imports: [AnimateOnScrollDirective, IconsModule, TranslatePipe],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
