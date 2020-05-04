import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppComponent } from './app.component';
import { CurrencyCalculatorComponent } from './currency-calculator/currency-calculator.component';


import { CurrencyService } from 'src/services/currency.service';
import { ContainsCodesPipe } from 'src/pipes/contains-codes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyCalculatorComponent,
    ContainsCodesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent],
})
export class AppModule { }
