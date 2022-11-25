import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockCategoryComponent } from './stock-category/stock-category.component';

const routes: Routes = [
  { path: '', component: StockCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
