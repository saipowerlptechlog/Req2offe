import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class AccountGuard implements CanActivate {
  constructor(private loc:Location)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      var role=localStorage.getItem('role');
      if(role=='Account'&&localStorage.getItem('token'))
      {

      
    return true;
      }
      else
      this.loc.back();
  }
}
