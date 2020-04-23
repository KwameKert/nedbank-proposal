import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { PropertyRoutingModule  } from './property-routing.module';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms/';
import {MatStepperModule} from '@angular/material/stepper';


@NgModule({
  declarations: [AddPropertyComponent],
  imports: [
    CommonModule,
    MatCardModule,  
    PropertyRoutingModule,
    FormsModule,
    ReactiveFormsModule,  
    MatStepperModule
  ]
})
export class PropertyModule { }
