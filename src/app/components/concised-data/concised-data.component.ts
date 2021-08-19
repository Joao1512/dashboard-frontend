import { Component, OnInit } from '@angular/core';
import { ConcisedDataService } from 'src/app/services/concised-data.service';

@Component({
  selector: 'app-concised-data',
  templateUrl: './concised-data.component.html',
  styleUrls: ['./concised-data.component.scss']
})
export class ConcisedDataComponent implements OnInit {

  data: Array<any> = [];
  loading: boolean = true;
  constructor(
    private concisedDataService: ConcisedDataService
  ) { }

  ngOnInit() {
    this.getConcisedDataInfo()
  }

  public getConcisedDataInfo() {
    this.concisedDataService.getConcisedDataInfo().subscribe(res => {
      this.data = res
       this.loading = false;
    })
  }
}
