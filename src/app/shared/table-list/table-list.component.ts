import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataList } from '../models/items-list';

@Component({
  selector: 'app-table-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './table-list.component.html',
  styleUrl: './table-list.component.css',
})
export class TableListComponent {
  @Input() header!: string[];
  @Input() dataSource!: DataList[];
  faPenEdit = faPenToSquare;
  faPlus = faPlus;
}
