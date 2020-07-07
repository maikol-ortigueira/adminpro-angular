import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progreso: number = 50;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor( valor: number ): void {

    if (this.progreso > 100 && valor > 0 ){
      return;
    }
    this.progreso = this.progreso + valor;
  }

}
