import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-marketing',
  templateUrl: './view-marketing.component.html',
  styleUrls: ['./view-marketing.component.css']
})
export class ViewMarketingComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }

}
