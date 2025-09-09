import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
          const token = localStorage.getItem('token');

          let authReq = req;
          if (token) {
               authReq = req.clone({
                    setHeaders: { Authorization: `Bearer ${token}` }
               });
          }

          return next.handle(authReq).pipe(
               catchError(error => {
                    if (error.status === 401) {
                         console.error('Unauthorized User');
                    }
                    return throwError(() => error);
               })
          );
     }
}