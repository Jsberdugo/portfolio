import { Component } from '@angular/core';
import { LanguageToggle } from '../../shared/language-toggle/language-toggle';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  imports: [LanguageToggle, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
