import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';
import { ProductCategory } from '../../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private readonly API = 'assets/products.json';

  constructor( private httpClient: HttpClient ) { }

  list() {
    return this.httpClient.get<ProductCategory[]>(this.API).pipe(
      first(),
      delay(2000),
      tap(stock => console.log(stock))
    );
  }

}
