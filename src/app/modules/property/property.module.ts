import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyRoutingModule  } from './property-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MapComponent } from './map/map.component';
import { MarketAnalysisComponent } from './components/market-analysis/market-analysis.component';



@NgModule({
  declarations: [AddPropertyComponent, MapComponent, MarketAnalysisComponent],
  imports: [
    CommonModule,
    MatCardModule,  
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    MatStepperModule,
    MatButtonModule
  ]
})
export class PropertyModule { }
