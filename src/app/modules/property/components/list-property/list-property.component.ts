import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-list-property',
  templateUrl: './list-property.component.html',
  styleUrls: ['./list-property.component.css']
})
export class ListPropertyComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }


  addProperty(){
      
      this._router.navigate(['/property/add']);
  }

}
