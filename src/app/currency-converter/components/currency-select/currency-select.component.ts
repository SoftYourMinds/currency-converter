import {} from '@angular/compiler';
import { Component } from '@angular/core';
import { CountriesService } from 'src/app/core/services/api-services/countries.service';
import { Countries, CountryData } from 'src/app/shared/models/TCountry';


@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent {
  public countries: CountryData[] = [];

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.initializeCountries();
    const val = localStorage.getItem('countries');
    const shit = JSON.parse(val || '');

    console.log(Object.values(shit))
  }

  private setCountries(countriesData: CountryData[]) {
    this.countries = countriesData;
  }

  private initializeCountries(): void {
    this.isCountriesLocallyStored() ?
      this.setCountries(
       Object.values(JSON.parse(localStorage.getItem('countries')!))
      ) :
      this.fetchCountries()
  }

  private isCountriesLocallyStored(): boolean {
    return !!localStorage.getItem('countries');
  }

  private fetchCountries(): void {
    this.countriesService.getCountries().subscribe({
      next: (countries) => {
        this.countries = Object.values(countries);
        localStorage.setItem('countries', JSON.stringify(countries));
      },
      error: (err) => {
        this.countries = [];
        console.log(err)
      }
    })
  }
}
