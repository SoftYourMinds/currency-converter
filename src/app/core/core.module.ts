import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { ApiInterceptor } from './interseptors/api.interceptor';
import { CountriesService } from './services/api-services/countries.service';

@NgModule({
  declarations: [

  ],

  imports: [
    CommonModule,
  ]
})
export class CoreModule { }
