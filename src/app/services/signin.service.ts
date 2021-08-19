import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SigninService {
  url: string = `${environment.apiUrl}/api`;

  constructor(
    private http: HttpClient,
  ) { }

  public saveUser(account: Account) {
    return this.http.post(`${this.url}/saveUser`, account).pipe(
      catchError(e => {
        let msg: string = "";
        if (e.error.errors) {
          msg = e.error.errors[0].message;
        }
        alert('Not possible to register user');
        return throwError(e);
      })
    );
  }
}
