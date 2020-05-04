import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from 'src/models/currency.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  currency():Observable<Currency>{
    return this.http.get<Currency>('https://api.coindesk.com/v1/bpi/currentprice.json');
  }
}
