import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';
import { ViewPropertyComponent } from './components/view-property/view-property.component';
import { ViewMarketAnalysisComponent } from './components/view-market-analysis/view-market-analysis.component';
import { ViewSiteAcquisitionComponent } from './components/view-site-acquisition/view-site-acquisition.component';
import { ViewPlanningComponent } from './components/view-planning/view-planning.component';
import { ViewApprovedComponent } from './components/view-approved/view-approved.component';
import { ViewFinancingComponent } from './components/view-financing/view-financing.component';
import { ViewMarketingComponent } from './components/view-marketing/view-marketing.component';
import { ViewConstructionComponent } from './components/view-construction/view-construction.component';
import { ViewConstructionCloseComponent } from './components/view-construction-close/view-construction-close.component';
import { ViewLoanComponent } from './components/view-loan/view-loan.component';


const routes: Routes = [ 

    {path: 'add', component: AddPropertyComponent },
    {path: 'list', component: ListPropertyComponent },
    {path: 'view', component: ViewPropertyComponent },
    {path: 'viewMarketAnalysis', component: ViewMarketAnalysisComponent },
    {path: 'viewSiteAcquisition', component: ViewSiteAcquisitionComponent},
    {path: 'viewPlanning', component: ViewPlanningComponent},
    {path: 'viewApproved', component: ViewApprovedComponent},
    {path: 'viewFinance', component: ViewFinancingComponent},
    {path: 'viewMarketing', component: ViewMarketingComponent},
    {path: 'viewConstruction', component: ViewConstructionComponent},
    {path: 'viewConstructionClose', component: ViewConstructionCloseComponent},
    {path: 'viewLoan', component: ViewLoanComponent}


 ];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PropertyRoutingModule { }
