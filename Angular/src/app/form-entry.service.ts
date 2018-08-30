import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

import { Observable, of, throwError} from 'rxjs';
import {FormEntry} from './form-entry';
import {catchError} from 'rxjs/operators';
import {FormEntryResult} from './form-entry-result';

@Injectable({
  providedIn: 'root'
})
export class FormEntryService {

  constructor(private http: HttpClient) { }

  postFormEntry(formEntry: FormEntry): Observable<HttpResponse<FormEntryResult>> {
    console.log('Posting: \n' + formEntry);
    return this.http.post<FormEntryResult>('http://localhost:3000/formEntry', formEntry, {
      observe: 'response',
      responseType: 'json'
    }).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.toString()}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
