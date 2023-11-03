
export type Country = {
  [countryCode: string]: CountryData
}

type CountryData = {
  name: string;
  currencies: Currencies,
  flag: Flag,
}

type Currencies = {
  [currencyCode: string]: CurrencyData
}

type CurrencyData = {
  name: string;
  symbol: string
}

type Flag = {
  medium: string,
}
