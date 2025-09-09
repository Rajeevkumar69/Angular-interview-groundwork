import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({ providedIn: 'root' })

export class AuthGuard implements CanActivate {

     constructor(
          private _router: Router
     ) { }

     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
          const userToken = localStorage.getItem('token');
          if (!userToken) {
               this._router.navigateByUrl('/login');
               return false;
          } else {
               return true;
          }
     }
}