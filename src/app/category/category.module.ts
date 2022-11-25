import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CategoryRoutingModule } from './category-routing.module';
import { StockCategoryComponent } from './stock-category/stock-category.component';

@NgModule({
  declarations: [
    StockCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
