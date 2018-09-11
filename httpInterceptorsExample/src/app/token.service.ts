import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  
  constructor(private httpClient : HttpClient) { }
 
  getData()
  {
    console.log("in getData tokenService")
    console.log('http://private-4002d-testerrorresponses.apiary-mock.com/getDataError401')
    return this.httpClient.get<{status}>('http://private-4002d-testerrorresponses.apiary-mock.com/getDataError401');
  }

  getNewData() 
  {
    console.log("in getNewData tokenService")
      return this.httpClient.get<{status}>('http://private-4002d-testerrorresponses.apiary-mock.com/getLookupError401');
  }
}

