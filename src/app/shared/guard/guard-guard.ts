import { CanActivate, Router } from "@angular/router";

export class AuthGuard implements CanActivate{

     constructor(
          private _router:Router
     ){

     }

     canActivate(): boolean {
          const isUserLoggedIn = localStorage.getItem('token');
          if(!isUserLoggedIn){
               this._router.navigateByUrl('/login');
               return false;
          }else{
               return true
          }
          
     }
}