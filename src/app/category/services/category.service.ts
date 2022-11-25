import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API = 'assets/products.json';

  constructor( private httpClient: HttpClient ) { }

  list() {
    return this.httpClient.get<Product[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(stock => console.log(stock))
    );
  }

}
