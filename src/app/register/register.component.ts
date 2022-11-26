import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor( private _AuthService:AuthService , private _Router: Router) { }
errorMessage:string='';
isLoading:boolean =false;
  registerForm:FormGroup= new FormGroup({
    first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age:new FormControl(null,[Validators.min(16),Validators.max(50),Validators.required]),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,[Validators.pattern('^[A-Z][a-z]{3,8}'),Validators.required]),
    
  })
  submitRegisterForm(registerForm:FormGroup){
    console.log(registerForm.value)
    this.isLoading = true;
    if(registerForm.valid)
    {
      this._AuthService.signup(registerForm.value).subscribe({
        next:(response)=>{
          if(response.message === 'success'){
            this.isLoading = false;
            this._Router.navigate(['/login'])
          }else{
              this.errorMessage = response.message;
              this.isLoading = false;
          }
        }
      })
    }
  }
 

  ngOnInit(): void {
  }

}
