import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (this.shouldAddCountriesApiKey(request)) {
      const apiKey = environment.countriesApiKey;

      request = request.clone({
        setHeaders: {
          'Authorization': 'Bearer ' + apiKey,
        },
      });
    }

    return next.handle(request);
  }

  shouldAddCountriesApiKey(request: HttpRequest<any>): boolean {
    return request.url.includes(environment.countriesApiPath);
  }
}
