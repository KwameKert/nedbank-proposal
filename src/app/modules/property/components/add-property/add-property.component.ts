import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {



 


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    

  }

  marketResponse(event: any){

    console.log(event)

  }




}
