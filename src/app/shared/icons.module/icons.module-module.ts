// src/app/shared/icons.module.ts
import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faChartLine,
  faBullhorn,
  faPuzzlePiece,
  faSearchDollar,
  faChalkboardTeacher,
  faUserTie,
  faHandshake,
  faLightbulb,
  faBriefcase,
  faUserCheck,
  faLaptopCode,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  exports: [FontAwesomeModule],
})
export class IconsModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(
      faChartLine,
      faBullhorn,
      faUserTie,
      faHandshake,
      faLightbulb,
      faPuzzlePiece,
      faSearchDollar,
      faChalkboardTeacher,
      faBriefcase,
      faUserCheck,
      faLaptopCode,
      faEnvelope
    );
  }
}
