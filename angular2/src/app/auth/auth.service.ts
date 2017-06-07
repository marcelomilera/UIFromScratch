import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './users.model';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {}

  signinUser(email: string, password: string): Observable<Users> {
    let params = new URLSearchParams();    
    params.set('username', email);
    params.set('password', password);
    //Buscar usuario y contraseña ingresados
    return this.http.get('http://localhost:3000/users',{search:params}).map(res => res.json() as Users);
  }

  isAuthenticated() {
    return localStorage.getItem('signedIn');
  }
}
