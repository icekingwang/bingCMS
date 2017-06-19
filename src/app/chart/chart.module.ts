import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import {SharedModule} from "../shared/shared.module";
import {ChartComponent} from "./chart.component";
import {RouterModule} from "@angular/router";
import {chartRoutes} from "./chart.routes";

@NgModule({
  imports: [
    SharedModule,
    ChartsModule,
    RouterModule.forChild(chartRoutes)
  ],
  declarations: [ChartComponent]
})
export class ChartModule { }
