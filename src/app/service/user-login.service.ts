import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http : HttpClient) { }

  //Login User
  public loginUser(loginUser:any) {
    console.log(loginUser);
    return this.http.post(`${baseUrl}/loginUser`,loginUser);
  }

  public isLoggedIn(){
    let token = localStorage.getItem("token");
  
    if(token == undefined || token == null || token == '' ){
      return false
    }else{
      return true;
    }
  }

  public userLogout() {
    localStorage.removeItem("token");
    // window.location.href='http://localhost:4200/';
    return true;
  }
}


