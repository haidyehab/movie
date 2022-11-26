import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {

  constructor(private _AuthService:AuthService , private _Router:Router ,private _ToastrService :ToastrService ) { }
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z]{3,8}')])
  })
   errorMessage:string=''
   isLoading:boolean=false;

  submitLoginForm(loginForm:FormGroup){

    this.isLoading=true
    if(loginForm.valid){
      console.log(loginForm.value)
      this._AuthService.signin(loginForm.value).subscribe({
        next:(response)=>{
          if( response.message === 'success'){
            this._ToastrService.success('Hello world!', 'login successffuly!');
            localStorage.setItem('userToken' ,response.token);
            this._AuthService.saveUserData()
            this.isLoading=false
            this._Router.navigate(['/home'])
          }else{
            this._ToastrService.error(response.message, 'login error!');
            // this.errorMessage =response.message
            this.isLoading=false;

          }
        }
      })

    }
  }

 
  

  ngOnInit(): void {
  }

}
