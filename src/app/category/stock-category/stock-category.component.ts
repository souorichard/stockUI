import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

import { CategoryService } from '../services/category.service';
import { Category } from './../../core/model';

@Component({
  selector: 'app-stock-category',
  templateUrl: './stock-category.component.html',
  styleUrls: ['./stock-category.component.scss']
})
export class StockCategoryComponent implements OnInit {

  stock$: Observable<Category[]>;

  displayedColumns: string[] = ['id', 'name'];

  constructor(
    private categoryService: CategoryService,
    public dialog: MatDialog
  ) {
    this.stock$ = this.categoryService.list().pipe(
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
