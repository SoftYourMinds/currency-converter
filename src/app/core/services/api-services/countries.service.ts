import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/shared/models/TCountry';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class CountriesService {

  constructor(private http: HttpClient) { }

  public getCountries():Observable<Country[]> {
    return this.http.get<Country[]>(environment.countriesApiPath+"/all");
  }

}
