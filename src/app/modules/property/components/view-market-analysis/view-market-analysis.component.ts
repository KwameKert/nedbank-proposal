import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-view-market-analysis',
  templateUrl: './view-market-analysis.component.html',
  styleUrls: ['./view-market-analysis.component.css']
})
export class ViewMarketAnalysisComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  viewProperty(){

    this._router.navigate(['/property/view'])
  }
}
