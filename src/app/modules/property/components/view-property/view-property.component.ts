import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-property',
  templateUrl: './view-property.component.html',
  styleUrls: ['./view-property.component.css']
})
export class ViewPropertyComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  listProperty(){

    this._router.navigate(['/property/list'])
  }
}
