import {
  Directive,
  ElementRef,
  Input,
  AfterViewInit,
  Renderer2,
  ChangeDetectorRef,
} from '@angular/core';

@Directive({
  selector: '[appAnimateOnScroll]',
  standalone: true,
})
export class AnimateOnScrollDirective implements AfterViewInit {
  @Input('appAnimateOnScroll') animationType = 'fade-up'; // por defecto fade-up
  @Input() animationDelay = 0; // ms

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    const node = this.el.nativeElement;
    // Le agregamos la clase base que indica el tipo de animación para el CSS
    this.renderer.addClass(node, this.animationType);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          setTimeout(() => {
            this.renderer.addClass(node, 'animate');
            this.cd.detectChanges();
          }, this.animationDelay);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(node);
  }
}
