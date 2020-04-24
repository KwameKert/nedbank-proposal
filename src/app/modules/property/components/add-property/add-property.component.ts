import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {



  @ViewChild('market') market: ElementRef<any>;
  @ViewChild('site') site: ElementRef<any>;
  @ViewChild('planning') planning: ElementRef<any>;
  @ViewChild('approved') approved: ElementRef<any>;
  @ViewChild('finance') finance: ElementRef<any>;
  @ViewChild('marketing') marketing: ElementRef<any>;
  @ViewChild('construction') construction: ElementRef<any>;
  @ViewChild('constructionClose') constructionClose: ElementRef<any>;
  //@ViewChild('planning') planning: ElementRef<any>;

  data: object = {}

  id: object = {};
  constructor(private _fb: FormBuilder, private _toastr: ToastrService) { }

  ngOnInit(): void {
    

  }

  handleMarketResponse(event: any){

    this._toastr.success("Market analysis saved", "Success  😊", {  timeOut:2000});
    //this._toastr.success("Success","market analysis SAved");
    console.log(event)
    let el: any = this.site.nativeElement;
      el.click();

  }
  handleAcquisitionResponse(event: any){

    this._toastr.success("Site acquisition saved", "Success  😊", {  timeOut:2000});
    //this._toastr.success("Success","market analysis SAved");
    console.log(event)
    let el: any = this.planning.nativeElement;
      el.click();

  }

  handlePlanningResponse(event: any){

    this._toastr.success("Planning saved", "Success  😊", {  timeOut:2000});
    
    let el: any = this.approved.nativeElement;
    el.click();
    console.log(event)
  }



  handleMapResponse(event: any){
      this.data = event;
      let el: any = this.market.nativeElement;
      el.click();
  } 


  handleApproveResponse(event: any){
    console.log('approved')
    this._toastr.success("Planning saved", "Success  😊", {  timeOut:2000});
    
    let el: any = this.finance.nativeElement;
    el.click();
  }


  handleFinanceResponse(event: any){
    this._toastr.success("Finance saved", "Success  😊", {  timeOut:2000});

    let el: any = this.marketing.nativeElement;
    el.click();
  }

  handleMarketingResponse(event: any){
    this._toastr.success("Marketing saved", "Success  😊", {  timeOut:2000});
    let el: any = this.construction.nativeElement;
    el.click();
  }

  handleConstructionResponse(event: any){
    this._toastr.success("Construction saved", "Success  😊", {  timeOut:2000});
    let el: any = this.constructionClose.nativeElement;
    el.click();
  }


  handleConstructionCloseResponse(event: any){
    this._toastr.success("Construction out saved", "Success  😊", {  timeOut:2000});
    let el: any = this.constructionClose.nativeElement;
    el.click();

  }

}
