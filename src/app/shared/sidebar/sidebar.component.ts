import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faCircleChevronLeft,
  faArrowUpRightDots,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  faHome = faHome;
  faCircleChevronLeft = faCircleChevronLeft;
  faArrowUpRightDots = faArrowUpRightDots;
  faClipboard = faClipboard;

  lstBtn: string[] = [
    'btnDashboard',
    'btnIncome',
    'btnProgress',
    'btnLogOut',
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  selectButton(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const elementId = target.id;

    if (elementId === 'btnLogOut') {
      this.router.navigate([{ outlets: { auth: ['auth'] } }], {
        relativeTo: this.route
      });
    }

    target.classList.add('bg-cornflower-blue-700');

    const elements = this.lstBtn.filter((x) => x != elementId);

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      document
        .getElementById(element)
        ?.classList.remove('bg-cornflower-blue-700');
    }
  }
}
