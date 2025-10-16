import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private isDarkMode = false;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initializeTheme() {
    this.updateBodyClass();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isDarkMode) {
      this.renderer.removeClass(document.body, 'light');
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
      this.renderer.addClass(document.body, 'light');
    }
  }
}
