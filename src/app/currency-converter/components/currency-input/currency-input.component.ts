import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent implements OnInit{
  // @Input() valueInput: number = 0;
  // @Output() valueChanged: EventEmitter<number> = new EventEmitter<number>();

  public currencyAmount: string = '0';
  public currencyAmountControl:FormControl = new FormControl('0');

  constructor() {
  }

  ngOnInit(): void {

  }

  onInput(event: Event): void {
    const userInputValue = (event.target as HTMLInputElement).value;
    if (!userInputValue) return;

    const formated = userInputValue.replace(/^0+/g, '0').replace(/[^\d.]/ig, '');
    const currencyAmount = parseFloat(formated);

    if(/^[0-9,]+\.$/.test(userInputValue)) {

      console.log(formated,/^[0-9]+.$/i.test(formated));
      return
    };

    if(isNaN(currencyAmount)) {
      this.currencyAmountControl.setValue(formated);
      return
    };

    this.currencyAmountControl.setValue(
      currencyAmount.toLocaleString('en-EU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }));
  }

  // onValueChanged() {
  //   this.valueChanged.emit(this.value)
  // }
}
