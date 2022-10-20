import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailOTPService {

  private _emailVerifyStatus = new Subject<string>();
  emailVerifyStatus$ = this._emailVerifyStatus.asObservable();

  constructor() { }

  sendEmailVerifyStatus(message : string) {
    this._emailVerifyStatus.next(message);
  }
}
