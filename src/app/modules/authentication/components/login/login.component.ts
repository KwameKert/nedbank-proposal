import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    isLoading: boolean = false;
    loginForm: any ;  
  constructor(private router: Router, private _fb: FormBuilder) { }

  ngOnInit() {
    
      this.loginForm = this._fb.group({
        username : new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)  
      });

  }

  loginUser(){
    console.log("Logging User in")
    this.router.navigate(['dashboard']);
  }

}
