import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { ViewMarketAnalysisComponent } from './components/view-market-analysis/view-market-analysis.component';


const routes: Routes = [ 

    {path: 'add', component: AddPropertyComponent },
    {path: 'list', component: ListPropertyComponent },
    {path: 'view', component: ViewPropertyComponent },
    {path: 'viewMarketAnalysis', component: ViewMarketAnalysisComponent },


 ];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PropertyRoutingModule { }
