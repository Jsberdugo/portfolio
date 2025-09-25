// contact.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private apiUrl = 'https://send-email-worker.juansimonberdugo.workers.dev/'; // tu worker de Cloudflare

  constructor(private http: HttpClient) {}

  sendMessage(formData: any) {
    return this.http.post(this.apiUrl, formData, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
