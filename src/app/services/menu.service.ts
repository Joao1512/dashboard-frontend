import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MenuService {
  url: string = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
  ) { }

  public getMainMenu() {
    return this.http.get<any>(`${this.url}/724864a6-2275-4de5-8a6d-ae630a0e0f3a`).pipe(
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

  public getAdminMenu() {
    return this.http.get<any>(`${this.url}/da7c5443-926e-461b-a82b-18abb98eda81`).pipe(
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
