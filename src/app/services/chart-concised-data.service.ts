import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartConcisedDataService {

  url: string = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
  ) { }

  public getChartConcisedDataInfo() {
    return this.http.get<any>(`${this.url}/9e43a8d2-139c-48cd-89d4-d73ce77b842a`).pipe(
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


