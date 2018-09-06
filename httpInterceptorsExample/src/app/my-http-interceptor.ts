import { Injectable, Injector } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { finalize, tap } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    constructor() { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let ok: string;
        console.log("intercepted request ... ");

        // Clone the request to add the new header.
        const authReq = req.clone(
            {
                headers: req.headers.set("headerName", "headerValue")
            }
        );

console.log("Sending request with new header now ...");
return next.handle(authReq).pipe(
    tap((event)=>{
    // Succeeds when there is a response; ignore other events
        if(event instanceof HttpResponse )
        {
            console.log('Success!!!')
        }
    },
    (error) => {
        console.log('error occured', error)
    }
    ),

   // Log when response observable either completes or errors
    finalize(() => {
        console.log('completed');
    })
)
}

}