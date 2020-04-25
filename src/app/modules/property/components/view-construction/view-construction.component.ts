import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-construction',
  templateUrl: './view-construction.component.html',
  styleUrls: ['./view-construction.component.css']
})
export class ViewConstructionComponent implements OnInit {

 
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }
}
