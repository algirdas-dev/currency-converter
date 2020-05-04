import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyCalculatorComponent } from './currency-calculator/currency-calculator.component';


const routes: Routes = [{path:'currency',component:CurrencyCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
