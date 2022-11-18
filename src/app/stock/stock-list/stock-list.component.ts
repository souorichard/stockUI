import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { Product } from 'src/app/core/model';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  stock$: Observable<Product[]>;

  displayedColumns: string[] = ['id', 'name', 'category', 'quantity'];

  constructor(
    private stockService: StockService,
    public dialog: MatDialog
  ) {
    this.stock$ = this.stockService.list().pipe(
      catchError(error => {
        this.onError('Error loading products.');
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }

  scroll() {
    window.scroll({
      top: 500,
      behavior: 'smooth'
    })
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

}
