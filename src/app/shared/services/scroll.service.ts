// src/app/services/scroll.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  scrollToElement(id: string, offset: number = 80) {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const y =
          el.getBoundingClientRect().top +
          (window.scrollY || document.documentElement.scrollTop || 0) -
          offset;

        // Intenta hacer scroll en los 3 posibles contextos (para Android/iOS/desktop)
        try {
          window.scrollTo({ top: y, behavior: 'smooth' });
        } catch {
          // fallback por si smooth no es soportado
          window.scrollTo(0, y);
        }

        // fallback extra para navegadores que ignoran window.scrollTo
        document.documentElement.scrollTop = y;
        document.body.scrollTop = y;
      } else {
        console.warn(`Elemento con id "${id}" no encontrado`);
      }
    }, 50);
  }
}
