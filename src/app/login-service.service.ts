import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  apiUrl = 'http://localhost:3000';


  constructor(private http: HttpClient, private router: Router) { }

  sendLogin(email, senha) {

    return this.http.post(this.apiUrl + '/logon', {
      userName: email,
      password: senha
    }).subscribe(
      (val: any ) => {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('usuario', val.userName);
        this.router.navigate(['/home']);
      },
      response => {
        console.log('POST com erro', response);
      });


    }
}
