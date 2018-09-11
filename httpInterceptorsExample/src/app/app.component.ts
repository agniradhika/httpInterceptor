import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TokenService } from './token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'httpInterceptorsExample';
  constructor(private httpClient: HttpClient, private tokenService : TokenService){ }
  method1Call(): void {
    this.tokenService.getData().subscribe(
      (response: any) => {
        console.log("Successfully Completed");
        console.log(response);
      }
    );
  }

  method2Call(): void {
    this.tokenService.getNewData().subscribe(
      data => {
        console.log("Successfully Completed");
        console.log(data);
      }
    );
  }
}
