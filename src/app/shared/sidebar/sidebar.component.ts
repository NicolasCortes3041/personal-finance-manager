import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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
    'btnProducts',
    'btnProgress',
    'btnLogOut',
  ];

  selectButton(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    const elementId = target.id;
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
