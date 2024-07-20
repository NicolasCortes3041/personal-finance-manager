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

  constructor(private router: Router, private documentService: DocumentService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const notFoundRouteActive = this.router.url.includes('(notfound:');
        const nativeDocument = this.documentService.nativeDocument;

        if (nativeDocument) {
          const mainOutlet = nativeDocument.querySelector('.main-outlet');
          const notFoundOutlet = nativeDocument.querySelector('.notfound-outlet');

          if (mainOutlet && notFoundOutlet) {
            if (notFoundRouteActive) {
              mainOutlet.classList.add('inactive');
              notFoundOutlet.classList.add('active');
            } else {
              mainOutlet.classList.remove('inactive');
              notFoundOutlet.classList.remove('active');
            }
          }
        }
      }
    });
  }
}
