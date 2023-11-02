import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { CurrencyConverterComponent } from './currency-converter.component';
import { CurrencyInputComponent } from './components/currency-input/currency-input.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CurrencyConverterComponent,
    CurrencyInputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CurrencyConverterModule { }
