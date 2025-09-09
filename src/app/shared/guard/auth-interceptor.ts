import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler) {
          const token = localStorage.getItem('token');

          let userAuth = req;
          if (token) {
               userAuth = userAuth.clone({
                    setHeaders: { Authorization: `Bearer ${token}` }
               })
          }

          return next.handle(userAuth).pipe(
               catchError(error => {
                    if (error.status === 401) {
                         console.log(`Unauthorized User`);

                    } else if (error.status === 500) {
                         console.log(`Internal Server Error`);
                    }

                    return throwError(() => error)
               })
          )
     }
}