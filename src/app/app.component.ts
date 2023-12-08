import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/layouts/navbar/navbar.component';
import { FooterComponent } from './core/components/layouts/footer/footer.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { headerInterceptor } from './interceptors/header.interceptor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, RouterOutlet],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'client';
}
