import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-currency-input',
  templateUrl: './currency-input.component.html',
  styleUrls: ['./currency-input.component.scss']
})
export class CurrencyInputComponent implements OnInit{
  @Input() currencyAmountInput: string = "0";
  @Output() currencyAmountChanged: EventEmitter<string> = new EventEmitter<string>();
  currencyAmountControl: FormControl = new FormControl(this.currencyAmountInput);

  constructor() {}

  ngOnInit(): void {
    this.currencyAmountControl.valueChanges.subscribe(inputValue => this.handleInput(inputValue));
  }

  private handleInput(inputValue: string): void {
    const formattedInput = this.formatInput(inputValue);
    this.currencyAmountControl.setValue(formattedInput, { emitEvent: false });
  }

  private formatInput(inputValue: string): string {
    if (!inputValue) return "0";

    const cleanedInput = this.cleanInput(inputValue);
    const currencyAmount = parseFloat(cleanedInput);

    if (this.shouldSkipFormatting(inputValue)) return cleanedInput;

    if (isNaN(currencyAmount)) return cleanedInput;

    return this.formatCurrency(currencyAmount);
  }

  private cleanInput(inputValue: string): string {
    return inputValue.replace(/[^0-9.]/g, '').replace(/^0+/, '0');
  }

  private shouldSkipFormatting(inputValue: string): boolean {
    return /^[0-9,]+\.$/.test(inputValue);
  }

  private formatCurrency(currencyAmount: number): string {
    return currencyAmount.toLocaleString('en-EU', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  }

  public onCurrencyAmountChanged(): void {
    this.currencyAmountChanged.emit(this.currencyAmountControl.value);
  }

}
