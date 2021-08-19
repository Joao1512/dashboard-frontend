import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, } from 'rxjs';
import { Credencial } from '../models/credencial';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string = `${environment.apiUrl}/api`;

  constructor(
    private http: HttpClient,
  ) { }

  public login(credencial: Credencial) {
    return this.http.post(`${this.url}/login`, credencial).pipe(
      catchError(e => {
        let msg: string = "";
        if (e.error.errors) {
          msg = e.error.errors[0].message;
        }
        alert('Not possible to Log in');
        return throwError(e);
      })
    );
  }
}
