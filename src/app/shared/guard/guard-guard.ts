import { CanActivate, Router } from "@angular/router";



export class AuthGuard implements CanActivate{

     constructor(
          private _router:Router
     ){

     }

     canActivate(): boolean {
          const userToekn = localStorage.getItem('toekn');
          if(!userToekn){
               this._router.navigateByUrl('/login');
               return false;
          }else{
               return true
          }

     }
}