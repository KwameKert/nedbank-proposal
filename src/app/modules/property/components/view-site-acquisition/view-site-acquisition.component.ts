import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-site-acquisition',
  templateUrl: './view-site-acquisition.component.html',
  styleUrls: ['./view-site-acquisition.component.css']
})
export class ViewSiteAcquisitionComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }
}
