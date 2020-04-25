import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-planning',
  templateUrl: './view-planning.component.html',
  styleUrls: ['./view-planning.component.css']
})
export class ViewPlanningComponent implements OnInit {

  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }
}
