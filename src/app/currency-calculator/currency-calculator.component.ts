import { Component, OnInit, OnDestroy } from '@angular/core';
import { CurrencyService } from 'src/services/currency.service';
import { Currency } from 'src/models/currency.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CurrencyRate } from 'src/models/currency-rate.model';
import { ContainsCodesPipe } from 'src/pipes/contains-codes.pipe';

@Component({
  selector: 'app-currency-calculator',
  templateUrl: './currency-calculator.component.html',
  styleUrls: ['./currency-calculator.component.less']
})
export class CurrencyCalculatorComponent implements OnInit,OnDestroy {
  currency:Currency;
  currencyCount: number = 0;
  bpiList: CurrencyRate[] = [];
  selectedBpiCodeList: any[] = [];
  dropdownSettingsBpi:IDropdownSettings;
  updateCurrencyListTimer :NodeJS.Timer;

  constructor(private _service: CurrencyService) { }

  ngOnInit() {
      this.dropdownSettingsBpi = {
        singleSelection: false,
        idField: 'code',
        textField: 'code',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: false
      };
      this.getCurrency();
      this.updateCurrencyListTimer = setInterval(
        () => this.getCurrency(),
        60*1000
    );
  }

  ngOnDestroy(){
    clearInterval(this.updateCurrencyListTimer);
  }

  getCurrency = () => {
    this._service.currency().subscribe(c => {
      this.currency = c
      this.bpiList = Object.values(c.bpi);
      console.log('refresh currency')
    });
  }

  onItemSelectBpi(item: any){

  }
  onSelectAllBpi(items: any) {
  }

  removeBpi = (code) => {
    this.selectedBpiCodeList = this.selectedBpiCodeList.filter( item => item.code !== code);
  }

  toLocaleCurrency = (value,code) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: code,
    })
  }
}
