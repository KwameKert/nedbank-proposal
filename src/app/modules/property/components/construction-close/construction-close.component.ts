import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-construction-close',
  templateUrl: './construction-close.component.html',
  styleUrls: ['./construction-close.component.css']
})
export class ConstructionCloseComponent implements OnInit {

  
  @Input() data : any;
  @Output() constructionCloseResponse = new EventEmitter<boolean>();

  constructionCloseForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.constructionCloseForm = this._fb.group({

    })
  }


  saveConstructionCloseForm(){

    this.constructionCloseResponse.emit(true)
  }

}
