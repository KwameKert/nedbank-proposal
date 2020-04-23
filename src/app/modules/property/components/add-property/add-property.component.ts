import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

    marketAnalysis: any; 
    siteSelection: FormGroup;
    siteAcquisition: FormGroup;


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    
      this.loadMarketAnalysis();

  }


    loadMarketAnalysis() {
        this.marketAnalysis = this._fb.group({
            geographicAnalysis: '',
            clientsValuation: '',
            feasibilyStudy: '',
            eia: '',
            geotechReport: ''
        })
    }



    fileProgress(fileInput: any) {
      // this.fileData = <File>fileInput.target.files[0];
      // this.formData.append('image', this.fileData, this.fileData.name);
      // this.preview();
    }


}
