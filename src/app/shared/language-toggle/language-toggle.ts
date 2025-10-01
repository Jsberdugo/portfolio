import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
@Component({
  imports: [NzSelectModule, FormsModule],
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.html',
})
export class LanguageToggle {
  languages = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
  ];

  current: string;

  constructor(private translate: TranslateService) {
    this.current = this.translate.getCurrentLang() || 'es';
  }

  changeLanguage(lang: string | Event) {
    if (typeof lang == 'string') {
      this.current = lang;
      this.translate.use(lang);
      localStorage.setItem('app_lang', lang);
    }
  }
}
