import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  title: string = '';
  constructor() { 
  }

  public receberTitulo(title: any) {
    this.title = title;
   }

  ngOnInit(): void {
  }
}
