import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(private oauthService: AuthServiceService,
    private router: Router) { }

canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
if(this.oauthService.isUserLoggedIn())
return true
this.router.navigate(['login'])
return false;
}
}
