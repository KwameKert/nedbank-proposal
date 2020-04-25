import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-financing',
  templateUrl: './view-financing.component.html',
  styleUrls: ['./view-financing.component.css']
})
export class ViewFinancingComponent implements OnInit {

  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }

}
