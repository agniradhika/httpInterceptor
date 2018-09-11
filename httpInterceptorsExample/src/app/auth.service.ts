import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of as observableOf } from 'rxjs';
import { Observable } from "rxjs";
import { delay } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public currentToken: any;
  public token : any = 'Token';
  public newToken : any = 'new_token';
  
  constructor(private http : HttpClient)
   { 
    this.currentToken = this.token
  }
  getToken() {
    return this.currentToken;
}

  refreshToken() : Observable<string>{
    console.log("refreshtoken")     
      this.currentToken = this.newToken;

      // Just to keep HttpClient from getting tree shaken.
      this.http.get('http://private-4002d-testerrorresponses.apiary-mock.com/getData');

      return observableOf(this.token).pipe(delay(200));
  }
}
