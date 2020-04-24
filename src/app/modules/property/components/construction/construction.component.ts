import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {


  @Input() data : any;
  @Output() constructionResponse = new EventEmitter<boolean>();

  constructionForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.constructionForm = this._fb.group({

    })
  }


  saveConstructionForm(){

    this.constructionResponse.emit(true)
  }
}
