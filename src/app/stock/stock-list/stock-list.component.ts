import { Component, OnInit } from '@angular/core';

const stock: Stock[] = [
  { id: 1, namecourse: 'Development of Systems', period: 'Full' },
  { id: 2, namecourse: 'Chemistry', period: 'Full' },
  { id: 3, namecourse: 'Marketing', period: 'Morning' },
  { id: 4, namecourse: 'Buildings', period: 'Night' },
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
