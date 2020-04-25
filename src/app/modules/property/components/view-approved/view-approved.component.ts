import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-approved',
  templateUrl: './view-approved.component.html',
  styleUrls: ['./view-approved.component.css']
})
export class ViewApprovedComponent implements OnInit {

  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }

}
