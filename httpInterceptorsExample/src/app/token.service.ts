import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
 
  
  constructor(private httpClient : HttpClient) { }
 
  getData()
  {
    return this.httpClient.get<{status}>('http://private-4002d-testerrorresponses.apiary-mock.com/getDataError401');
  }

  getNewData() 
  {
      return this.httpClient.get<{status}>('http://private-4002d-testerrorresponses.apiary-mock.com/getLookupError401');
  }
}

