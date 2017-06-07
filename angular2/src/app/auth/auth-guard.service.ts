import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
  	private authService: AuthService, 
  	private router: Router
  ) {}

  canActivate() {
  	//Si ha iniciado sesión, devuelve true para dar acceso a la ruta
  	if (this.authService.isAuthenticated())
  		return true;
  	//Si no ha iniciado sesión, redirecciona a la vista signIn
  	else{
    	this.router.navigate(['/signin']);
        return false;
  	}
  }
}
