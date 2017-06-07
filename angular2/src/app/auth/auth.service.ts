import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './users.model';

@Injectable()
export class AuthService {

  constructor(
    private http: Http
  ) {}

  signinUser(username: string, password: string): Observable<Users> {
    let params = new URLSearchParams();    
    params.set('username', username);
    params.set('password', password);
    //Buscar usuario y contraseña ingresados
    return this.http.get('http://localhost:3000/users',{search:params}).map(res => res.json() as Users);
  }

  isAuthenticated() {
    return localStorage.getItem('signedIn');
  }

  create(username: string, password: string): Observable<Users> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      //Enviar POST request al JSON-SERVER con username y password ingresados
      return this.http.post('http://localhost:3000/users', { username:username, password: password }, options).map(res => res.json() as Users);
    }
}
