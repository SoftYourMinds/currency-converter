import {} from '@angular/compiler';
import { Component } from '@angular/core';
import { CountriesService } from 'src/app/core/services/api-services/countries.service';
import { Country } from 'src/app/shared/models/TCountry';


@Component({
  selector: 'app-currency-select',
  templateUrl: './currency-select.component.html',
  styleUrls: ['./currency-select.component.scss']
})
export class CurrencySelectComponent {
  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.initializeCountries();
  }

  private setCountries(countriesData: Country[]) {
    this.countries = countriesData;
  }

  private initializeCountries(): void {
    this.isCountriesLocallyStored() ?
      this.setCountries(
        JSON.parse(localStorage.getItem("counries")!)
      ) :
      this.fetchCountries()
  }

  private isCountriesLocallyStored(): boolean {
    return !!localStorage.getItem('countries');
  }

  private fetchCountries(): void {
    this.countriesService.getCountries().subscribe({
      next: (countries) => {
        this.countries = countries;
        localStorage.setItem('countries', JSON.stringify(countries));
      },
      error: (err) => {
        this.countries = [];
        console.log(err)
      }
    })
  }
}
