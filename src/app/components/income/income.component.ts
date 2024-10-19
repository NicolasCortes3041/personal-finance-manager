import { Component, OnInit } from '@angular/core';

import { faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { DataList } from '../../shared/models/items-list';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.css',
})
export class IncomeComponent implements OnInit {
  faPenEdit = faPenToSquare;
  faPlus = faPlus;

  headerList = ['Fecha ingreso', 'Monto', 'Acción'];
  data: DataList[] = [
    { item1: '13-10-2024', item2: '10.000' },
    { item1: '12-10-2024', item2: '20.000' },
    { item1: '11-10-2024', item2: '30.000' },
  ];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    var list = this.documentService.nativeDocument?.getElementById('list-data');
    var divSeparatorData = list?.lastElementChild?.getElementsByClassName('bg-gray-300');
    if (divSeparatorData && divSeparatorData?.length > 0) {
      divSeparatorData[0].remove();
    }
  }
}
