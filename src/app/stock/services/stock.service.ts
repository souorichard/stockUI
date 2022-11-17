import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Stock } from '../../core/model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private readonly API = 'assets/stock.json';

  constructor( private httpClient: HttpClient ) { }

  list() {
    return this.httpClient.get<Stock[]>(this.API);
  }

}
