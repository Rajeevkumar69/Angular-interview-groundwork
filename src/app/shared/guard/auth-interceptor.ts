import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, throwError } from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
     constructor(

     ){}

     intercept(req: HttpRequest<any>, next: HttpHandler) {
          const token = localStorage.getItem('token');

          let authData = req;

          if(token){
               authData = req.clone({
                    setHeaders:{Authorization:`Bearer ${token}`}
               })
          }

          return next.handle(authData).pipe(
               catchError(error=>{
                    if(error.status === 401){
                         console.log('Unauthorized User');
                    }else if(error.status === 500){
                         console.log('Internal Server Error');
                    }

                    return throwError(()=>error)
               })
          )
          
     }
}