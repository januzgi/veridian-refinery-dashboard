import { Component, signal } from '@angular/core';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('veridian-refinery-dashboard');

  // Inject the service into the component's constructor
  constructor(private themeService: ThemeService) {
    this.themeService.initializeTheme(); // Set the initial theme
  }

  // Create a method to call the service's toggle function
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
