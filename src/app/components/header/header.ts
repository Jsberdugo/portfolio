import { Component } from '@angular/core';
import { LanguageToggle } from '../../shared/language-toggle/language-toggle';
import { FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  imports: [LanguageToggle, FormsModule, TranslatePipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
