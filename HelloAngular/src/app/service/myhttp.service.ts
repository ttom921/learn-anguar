import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
export class DataForm {
  name: string;
  id: number;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
}
@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  readonly userUrl = 'api/users';//url to web api
  constructor(private http: HttpClient) { }
  getUsers(): Observable<DataForm[]> {
    return this.http.get<DataForm[]>(this.userUrl)
      .pipe(
        catchError(this.handleError('getUsers'))
      ) as Observable<DataForm[]>;
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
