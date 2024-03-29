import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent ,SidebarComponent,FooterComponent} from './layouts';
import { AppRoutingModule } from './app-routing.module';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DefaultComponent } from './layouts/default/default.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule  } from '@angular/material/paginator';
import { ViewSiteAcquisitionComponent } from './modules/property/components/view-site-acquisition/view-site-acquisition.component';
import { ViewPlanningComponent } from './modules/property/components/view-planning/view-planning.component';
import { ViewApprovedComponent } from './modules/property/components/view-approved/view-approved.component';
import { ViewFinancingComponent } from './modules/property/components/view-financing/view-financing.component';
import { ViewMarketingComponent } from './modules/property/components/view-marketing/view-marketing.component';
import { ViewConstructionComponent } from './modules/property/components/view-construction/view-construction.component';
import { ViewConstructionCloseComponent } from './modules/property/components/view-construction-close/view-construction-close.component';
import { ViewLoanComponent } from './modules/property/components/view-loan/view-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DefaultComponent,
    ViewSiteAcquisitionComponent,
    ViewPlanningComponent,
    ViewApprovedComponent,
    ViewFinancingComponent,
    ViewMarketingComponent,
    ViewConstructionComponent,
    ViewConstructionCloseComponent,
    ViewLoanComponent,
  

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,  
    MatCardModule, 
    MatTableModule, 
    MatPaginatorModule,
    ToastrModule.forRoot(), 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
