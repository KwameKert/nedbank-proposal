import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  @Input() data : any;
  @Output() loanResponse = new EventEmitter<boolean>();

  loanForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.loanForm = this._fb.group({

    })
  }


  saveLoanForm(){

    this.loanResponse.emit(true)
  }


}
