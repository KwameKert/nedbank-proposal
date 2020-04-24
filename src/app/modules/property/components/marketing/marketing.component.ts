import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.component.html',
  styleUrls: ['./marketing.component.css']
})
export class MarketingComponent implements OnInit {


  @Input() data : any;
  @Output() marketingResponse = new EventEmitter<boolean>();

  marketingForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.marketingForm = this._fb.group({

    })
  }


  saveMarketingForm(){

    this.marketingResponse.emit(true)
  }
}
