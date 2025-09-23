import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.html',
  styleUrls: ['./call-to-action.scss'],
  imports: [FaIconComponent, NzButtonModule],
})
export class CallToAction {
  constructor(private router: Router, private library: FaIconLibrary) {
    this.library.addIcons(faArrowRight);
  }
  onLinkClick(url: string) {
    window.open(url, '_blank');
  }
}
