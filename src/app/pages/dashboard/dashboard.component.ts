import { Component, OnInit } from '@angular/core';
import { LancamentoContaLegado } from 'src/app/apis/json';
import { LancamentoContaLegadoResponse } from 'src/app/apis/models/responses/lancamento-conta-legado.response';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  p: number = 1;
  maxVisibleItems: number = 20;
  response: LancamentoContaLegadoResponse = LancamentoContaLegado; 

  constructor() { }

  key: string = 'descricao';
  reverse: boolean = false;
  sort(key: any): void {
    this.key = key;
    this.reverse = !this.reverse;
  }

  ngOnInit(): void {
    console.log(this.response);
  }

}
