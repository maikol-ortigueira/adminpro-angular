import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: [
  ]
})
export class GraficaDonaComponent implements OnInit {

  // Doughnut
  @Input() doughnutChartLabels: Label[] = [];
  @Input() doughnutChartData: MultiDataSet[] = [];
  @Input() doughnutChartType: ChartType = '';
  @Input() doughnutChartColors: Color[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
