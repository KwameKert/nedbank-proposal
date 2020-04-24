import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  @Input() data : any;
  @Output() financeResponse = new EventEmitter<boolean>();

  financeForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.financeForm = this._fb.group({

    })
  }

  saveFinanceForm(){
    
    this.financeResponse.emit(true)

  }

}
