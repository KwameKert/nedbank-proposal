import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-site-acquisition',
  templateUrl: './site-acquisition.component.html',
  styleUrls: ['./site-acquisition.component.css']
})
export class SiteAcquisitionComponent implements OnInit {

  @Input() propId: number;
  @Output() acquisitionResponse = new EventEmitter<boolean>();

  siteAcquisitionForm: FormGroup ;
  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {

    this.siteAcquisitionForm = this._fb.group({
        test: ''
    })
  }

  saveAcquisitionForm(){
    this.acquisitionResponse.emit(true)

  }



}
