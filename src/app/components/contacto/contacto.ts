import { AnimateOnScrollDirective } from './../../shared/directives/animate-on-scroll';
import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { ContactService } from '../../shared/services/contact.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    AnimateOnScrollDirective,
  ],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.scss'],
})
export class Contacto implements OnInit {
  form!: FormGroup;
  submitted = false;
  loading = false;
  messageError = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required], // ✅ aquí ya está correcto
    });
  }

  submitForm() {
    if (this.form.invalid) return;
    this.loading = true;
    this.contactService.sendMessage(this.form.value).subscribe({
      next: () => {
        this.submitted = true;
        this.messageError = false;
        this.loading = false;
        this.form.reset();
      },
      error: () => {
        this.messageError = true;
        this.submitted = false;
        this.loading = false;
      },
    });
  }
}
