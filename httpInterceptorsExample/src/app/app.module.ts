import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS  , HttpClientModule } from "@angular/common/http";
import { MyHttpInterceptorService } from './my-http-interceptor.service';
import { AppComponent } from './app.component';
import { TokenService } from "./token.service";
import {AuthService} from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: 
  [
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: MyHttpInterceptorService, 
    multi: true 
  },
  TokenService,
  AuthService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
