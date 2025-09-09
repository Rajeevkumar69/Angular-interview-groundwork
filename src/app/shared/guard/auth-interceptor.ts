import { HttpInterceptor, HttpRequest } from "@angular/common/http";
import { HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler) {
          const token = localStorage.getItem('token');

          let authReq = req;
          if (token) {
               authReq = req.clone({
                    setHeaders: { Authrization: `Bearer ${token}` }
               })
          }

          return next.handle(authReq).pipe(
               catchError(error => {
                    if (error.status === 401) {
                         console.log(`Unauth... user`);
                    } else if (error.status === 500) {
                         console.log(`Internal Server error`);
                    }

                    return throwError(() => error)
               })
          )

     }
}