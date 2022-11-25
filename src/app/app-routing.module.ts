import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //Stock
  { path: '', pathMatch: 'full', redirectTo: 'stock' },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then(m => m.StockModule)
  },

  //Category
  {
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
