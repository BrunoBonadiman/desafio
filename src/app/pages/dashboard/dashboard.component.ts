import { Component, OnInit, TemplateRef } from '@angular/core';
import { LancamentoContaLegado } from 'src/app/apis/json';
import { LancamentoContaLegadoResponse } from 'src/app/apis/models/responses/lancamento-conta-legado.response';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  fileName = 'Lançamentos Contas Legado.xlsx';
  p: number = 1;
  maxVisibleItems: number = 25;
  response: LancamentoContaLegadoResponse = LancamentoContaLegado;

  constructor() {}

  key: string = 'cardBrand';
  reverse: boolean = false;
  sort(key: any): void {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void {}

  exportexcel(): void {
    let element = document.getElementById('table-lancamento-contas-legado');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
}
