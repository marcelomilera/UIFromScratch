import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { Users } from '../users.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user: Users;
  failedAuth: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ){ }

  ngOnInit() {
    this.failedAuth = false;
  }

  onSignin(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    //Buscar usuario y contraseña ingresados
    this.authService.signinUser(username, password).subscribe(
      (res) => {
        //Si usuario y contraseña existen
        if (res[0]){
          this.user = res[0];
          localStorage.setItem('signedIn', this.user.username);
          this.router.navigate(['/books']);
        }
        else{
          //Mostrar mensaje de username y password no válidos
          this.failedAuth = true;
        }
      }
    );
  }

}
