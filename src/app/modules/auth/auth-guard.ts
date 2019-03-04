import { CanActivate } from "@angular/router/src/interfaces";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router : Router){ }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
        if (localStorage.getItem('userToken') != null){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
