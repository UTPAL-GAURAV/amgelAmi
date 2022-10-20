import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {EmailVerifyComponent} from '../../components/email-verify/email-verify.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmailOTPService } from '../../service/email-otp.service';
import { RegisterMenService } from '../../service/register-men.service';
import {UserLoginService} from '../../service/user-login.service';
import Swal from 'sweetalert2';


interface Language {
  value: string;
  viewValue: string;
}

interface Country {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  languages: Language[] = [
    {value: 'English', viewValue: 'English'},
    {value: 'French', viewValue: 'French'},
    {value: 'German', viewValue: 'German'}
  ];

  countries: Country[] = [
    {value: 'France', viewValue: 'France'},
    {value: 'Germany', viewValue: 'Germany'},
    {value: 'United Kingdom', viewValue: 'United Kingdom'}
  ];

  constructor(private emailVerify : MatBottomSheet, private snack:MatSnackBar, private emailOTPStatus : EmailOTPService,
              private menService : RegisterMenService, private loginService: UserLoginService) { }

  ngOnInit(): void {
    this.emailOTPStatus.emailVerifyStatus$.subscribe(
      message => {
        if(message==="1")
          this.afterEmailVerification();
        else
          console.log("booo");
      }
    );
  }


  // SIGNUP Form --------------------------------------------------------------

  public user = {
    emailid : '',
    name : '',
    gender : undefined,
    language : '',
    country : '',
    password : '',
    confirmPassword : ''
  };


  formSignupSubmit() {
    console.log("in fun");

    if(this.user.emailid=="" || this.user.emailid==null) {
      this.snack.open("Email is required", "", { duration: 3000});
      return;
    }
    else if(this.user.name=="" || this.user.name==null || this.user.name.length<4) {
      this.snack.open("Invalid Name", "", { duration: 3000});
      return;
    }
    else if(this.user.gender==undefined) {
      this.snack.open("Select Gender", "", { duration: 3000});
      return;
    }
    else {
      this.formEmailVerification();
    }

  }

  formEmailVerification() {
    this.emailVerify.open(EmailVerifyComponent);
  }

  afterEmailVerification() {
    this.emailVerify.dismiss();
    this.menService.addUser(this.user).subscribe(
      (data) => {
        if(data == true)
          Swal.fire('Oops','User already exists.','info');
        else
          Swal.fire('Success','User is registered','success');
      },
      (error) => {
        console.log(error);
        alert("Something went wrong!");
      }
    );
  }


  // LOGIN Form--------------------------------------------------------------

  public loginUser = {
      emailid : '',
      password : ''
  };

  formLoginSubmit() {
    this.loginService.loginUser(this.loginUser).subscribe(
      (data) => {
        console.log(data);
        if(data == false)
          Swal.fire('Login Failed','Register to log in','error');
        else{
          localStorage.setItem("token",data.toString());
          window.location.href='http://localhost:4200/home';
        }
      },
      (error) => {
        console.log(error);
        alert("Something went wrong!");
      }
    );
  }

}


