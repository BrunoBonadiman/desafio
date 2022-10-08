import { Component, OnInit, TemplateRef } from '@angular/core';
import { LancamentoContaLegado } from 'src/app/apis/json';
import { LancamentoContaLegadoResponse } from 'src/app/apis/models/responses/lancamento-conta-legado.response';
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  fileName = 'Lançamentos-contas-legado.xlsx';
  p: number = 1;
  maxVisibleItems: number = 20;
  response: LancamentoContaLegadoResponse = LancamentoContaLegado;
  modalRef: BsModalRef | any;
  
  constructor(private readonly modalService: BsModalService) {}

  key: string = 'descricao';
  reverse: boolean = false;
  sort(key: any): void {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void {
    console.log(this.response);
  }

  abrirModal(template: TemplateRef<HTMLDivElement>, tamanho: string): void {
    this.modalRef = this.modalService.show(template, { class: tamanho });
  }

  exportexcel(): void {
    let element = document.getElementById('table-lancamento-contas-legado');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }
}
