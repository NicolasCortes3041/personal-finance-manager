import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FontAwesomeModule, HeaderComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'personal-finance-manager';

  faCoffee = faCoffee;

  constructor(
    private router: Router,
    private documentService: DocumentService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateOutletVisibility();
      }
    });
  }

  private updateOutletVisibility(): void {
    const nativeDocument = this.documentService.nativeDocument;
    if (!nativeDocument) return;

    const mainOutlet = nativeDocument.querySelector('.main-outlet');
    const notFoundOutlet = nativeDocument.querySelector('.notfound-outlet');
    const authOutlet = nativeDocument.querySelector('.auth-outlet');
    if (!mainOutlet || !notFoundOutlet || !authOutlet) return;

    const notFoundRouteActive = this.router.url.includes('(notfound:');
    const authRouteActive = this.router.url.includes('auth');

    mainOutlet.classList.toggle(
      'inactive',
      notFoundRouteActive || authRouteActive
    );
    authOutlet.classList.toggle('inactive', !authRouteActive);
    authOutlet.classList.toggle('active', authRouteActive);
    notFoundOutlet.classList.toggle('inactive', !notFoundRouteActive);
    notFoundOutlet.classList.toggle('active', notFoundRouteActive);
  }
}
