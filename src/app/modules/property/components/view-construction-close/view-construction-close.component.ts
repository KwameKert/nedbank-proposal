import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-construction-close',
  templateUrl: './view-construction-close.component.html',
  styleUrls: ['./view-construction-close.component.css']
})
export class ViewConstructionCloseComponent implements OnInit {

  
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }
}
