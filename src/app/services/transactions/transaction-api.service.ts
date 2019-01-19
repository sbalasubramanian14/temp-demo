import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { Transaction } from '../../models/transaction';
import { TransactionDetails } from '../../models/transaction-details';
@Injectable({
  providedIn: 'root'
})
export class TransactionApiService {

  constructor(private http: HttpClient) { }

  public getTransactions(): Observable<Transaction[]> {
    return this.http
      //.get<Transaction[]>('http://localhost:3000/transactions').pipe(
        .get<Transaction[]>('https://api.myjson.com/bins/137d2g').pipe(
        // catchError(this.handleError('getTransactions', []))
      );
   }

    public getTransactionDetails(text: string): Observable<TransactionDetails[]> {
      return this.http
        //.get<TransactionDetails[]>('http://localhost:3000/details?q=' + text).pipe(
          .get<TransactionDetails[]>('https://api.myjson.com/bins/19r4q0').pipe(
         // catchError(this.handleError('getTransactionDetails', []))
        );
    }
}

