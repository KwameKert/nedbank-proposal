import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './components/add-property/add-property.component';
import { ListPropertyComponent } from './components/list-property/list-property.component';


const routes: Routes = [ 

    {path: 'add', component: AddPropertyComponent },
    {path: 'list', component: ListPropertyComponent }

 ];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PropertyRoutingModule { }
