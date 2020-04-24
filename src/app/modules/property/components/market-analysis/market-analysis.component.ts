import { Component, OnInit, Output, Input , EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-market-analysis',
  templateUrl: './market-analysis.component.html',
  styleUrls: ['./market-analysis.component.css']
})
export class MarketAnalysisComponent implements OnInit {

  @Input() propId : number ;
  @Output() emitResponse = new EventEmitter<boolean>();
  formData: any = new FormData();
  fileData: File = null;
  previewUrl:any = null;

  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  public currentUrl: string;
  fileToUpload: File = null;
 
  //fileData: File = null;
    property: string ;
    marketAnalysisForm: any; 
    siteSelection: FormGroup;
    siteAcquisition: FormGroup;


  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    
      this.loadMarketAnalysis();

  }


    loadMarketAnalysis() {
        this.marketAnalysisForm = this._fb.group({
            geographicAnalysis: '',
            clientsValuation: '',
            feasibilyStudy: '',
            eia: '',
            geotechReport: ''
        });


    }


    
    prepareImage(fileInput: any){
      return new Promise((resolve, reject)=>{
        this.fileData = <File>fileInput.target.files[0];
        this.formData.append('file', this.fileData, this.fileData.name);
         resolve(this.formData);

      })
     
     // console.log(fileInput)
      // let fileData  = <File>fileInput.target.files[0];
      // this.formData.append('image', fileData, fileData.name);
      // return this.formData;
    }


    geographicAnalysisFile(fileInput: any) {
      this.prepareImage(fileInput).then((data: any)=>{
            this.marketAnalysisForm.patchValue({
              geographicAnalysis: data
            })
      })
     
    }


    clientsValuationFile(fileInput: any) {
      this.prepareImage(fileInput).then((data: any)=>{
        this.marketAnalysisForm.patchValue({
          clientsValuation: data
        })
      })
    }


    feasibilyStudyFile(fileInput: any){
      this.prepareImage(fileInput).then((data)=>{
        this.marketAnalysisForm.patchValue({
          feasibilyStudy: data
        })
      })
      
    
    }


    eiaFile(fileInput: any){
      this.prepareImage(fileInput).then((data)=>{
        this.marketAnalysisForm.patchValue({
          eia: data
        })
      })
    
    }


    geotechReportFile(fileInput: any){
      this.prepareImage(fileInput).then((data)=>{
        this.marketAnalysisForm.patchValue({
          geotechReport: data
        })
      })
  
    }


  

    saveMarketForm(){
      this.emitResponse.emit(true);
      console.log(this.marketAnalysisForm.value)
    }


}
