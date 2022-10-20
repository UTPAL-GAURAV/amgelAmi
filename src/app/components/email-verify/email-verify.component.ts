import { Component, OnInit } from '@angular/core';
import { EmailOTPService } from '../../service/email-otp.service';

@Component({
  selector: 'app-email-verify',
  templateUrl: './email-verify.component.html',
  styleUrls: ['./email-verify.component.scss']
})
export class EmailVerifyComponent implements OnInit {

  constructor(private emailotp : EmailOTPService) { }

  ngOnInit(): void {
  }

  public angel = {
    angelName : ''
  };



  formVerifyAngel() {
    console.log("Angel verified");
    this.emailotp.sendEmailVerifyStatus("1");
  }
}
