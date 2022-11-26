import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable ,BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor( private _HttpClient:HttpClient , private _Router:Router) {
    
    // if(localStorage.getItem('userToken')){
    //   this.saveUserData();
    // }
}


   userData:any= new BehaviorSubject(null);

   saveUserData(){
    let encodedToken = JSON.stringify( localStorage.getItem('userToken'))
    let decodedToken =jwtDecode(encodedToken);
    this.userData.next(decodedToken)
    console.log(decodedToken)
   }

  signup(formDate:object):Observable<any>
  {
   return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signup`,formDate)
  }

  signin(formDate:object):Observable<any>
  {
   return this._HttpClient.post(`https://route-egypt-api.herokuapp.com/signin`,formDate)
  }

  signOut()
  {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login'])

  }
}
