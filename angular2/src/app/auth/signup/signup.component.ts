import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { Users } from '../users.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: Users;
  failedAuth: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
  ){ }

  ngOnInit() {
    this.failedAuth = false;
  }

  onSignup(form: NgForm) {
    const username = form.value.username;
    const password = form.value.password;
    //Registrar usuario y contraseña ingresados
    this.authService.create(username, password).subscribe(
      (res) => {
          if(res)
            this.router.navigate(['/signin']);
      }
    );
  }
}
