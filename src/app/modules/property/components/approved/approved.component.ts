import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {

  @Input() data : any;
  @Output() approvedResponse = new EventEmitter<boolean>();

  approvedForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.approvedForm = this._fb.group({

    })
  }

  saveApproveForm(){
    
    this.approvedResponse.emit(true)

  }

}
