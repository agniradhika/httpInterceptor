import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS  , HttpClientModule } from "@angular/common/http";
import { MyHttpInterceptor } from './my-http-interceptor'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
   
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: MyHttpInterceptor, 
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
