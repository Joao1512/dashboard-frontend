import { ChartConcisedDataService } from './../../services/chart-concised-data.service';
import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
import { CurveFactory } from 'd3-shape';
import { ScaleType } from '@swimlane/ngx-charts';
import { ChartService } from 'src/app/services/chart.service';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  chartInfo: any;
  loadingChart = true;
  multi: Array<any> = [];
  view: any[] = [700, 300];
  chartConcisedDataInfo: any;

  xAxis: boolean = true;
  yAxis: boolean = true;
  legend: boolean = true;
  timeline: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  schemeType = ScaleType.Ordinal;
  showXAxisLabel: boolean = true;
  showYAxisLabel: boolean = true;
  curve: CurveFactory = shape.curveBasis;
  colorScheme = {
    domain:['']  
  };

  constructor(
    private chartService: ChartService,
    private chartConcisedDataService: ChartConcisedDataService,
  ) {}

  ngOnInit() {
    this.getChartData()
    this.getChartConcisedDataInfo()
    
  }

  getChartData() {
    this.chartService.getChartInfo().subscribe(res => {
      this.chartInfo = res
      this.setMulti(res)
      this.setColorScheme()
      this.loadingChart = false
      
    })
  }

  getChartConcisedDataInfo() {
    this.chartConcisedDataService.getChartConcisedDataInfo().subscribe(res => {
      this.chartConcisedDataInfo = res;
    })
  }

  setMulti(res: any) {
    for (let index = 0; index < res.chartData.length; index++) {
      const element = res.chartData[index];
      this.multi.push(element)
    }
  }

  setColorScheme() {
    let colors: Array<string> = []
    this.multi.forEach((item: any) => {
      colors.push(item.color)
    })

    this.colorScheme.domain = colors
    
  }

}
