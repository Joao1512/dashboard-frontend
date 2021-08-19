import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ChartService {
  url: string = `${environment.apiUrl}`;

  constructor(
    private http: HttpClient,
  ) { }

  public getChartInfo() {
    return this.http.get<any>(`${this.url}/80caccb9-c1ce-495f-b284-797341047300`).pipe(
      catchError(e => {
        let msg: string = "";
        if (e.error.errors) {
          msg = e.error.errors[0].message;
        }
        alert('Not possible get data');
        return throwError(e);
      })
    );
  }
}
