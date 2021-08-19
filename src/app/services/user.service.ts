import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, } from 'rxjs';
import { User } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class userService {
  url: string = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
  ) { }

  public getUserInfo(id: number) {
    return this.http.get<Array<User>>(`${this.url}/d81067bb-e798-48bc-a9d8-68b4d6f81c7e/${id}`).pipe(
      catchError(e => {
        let msg: string = "";
        if (e.error.errors) {
          msg = e.error.errors[0].message;
        }
        alert('Not possible to get data');
        return throwError(e);
      })
    );
  }
}
