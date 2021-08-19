import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ConcisedDataService {
  url: string = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
  ) { }

  public getConcisedDataInfo() {
    return this.http.get<any>(`${this.url}/539d072c-47e9-4ccb-a81f-27cf46adf197`).pipe(
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