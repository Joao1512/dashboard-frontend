import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ChartComponent } from 'src/app/components/chart/chart.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ConcisedDataComponent } from 'src/app/components/concised-data/concised-data.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ChartComponent,
    ConcisedDataComponent,
    HeaderComponent,
    MenuComponent,
],
  imports: [
    CommonModule,
    NgxChartsModule,
    DashboardRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class DashboardModule { }
