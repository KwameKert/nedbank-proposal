import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  @Input() propId: number;
  @Output() planningResponse = new EventEmitter<boolean>();

  planningForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.planningForm = this._fb.group({

    })
  }



  savePlanningForm(){
    this.planningResponse.emit(true)
  }





}
