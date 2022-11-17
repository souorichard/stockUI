import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/core/model';

const stock: Stock[] = [
  { id: 1, },
  { id: 2, },
  { id: 3, },
  { id: 4, },
];

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'period'];
  stock = stock;

  constructor() { }

  ngOnInit(): void {
  }

  scroll() {
    window.scroll({
      top: 500,
      behavior: 'smooth'
    })
  }

}
