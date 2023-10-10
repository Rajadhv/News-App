import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonApiServiceService {
  private apiKey = '1834798b08a04cc3a2105473d9210525';
  private baseUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http:HttpClient ) {}

  getNewsByCountry(countryCode: string) :Promise<any>{
    const url = `${this.baseUrl}?country=${countryCode}&apiKey=${this.apiKey}`;
    return this.http.get(url).toPromise()
  }
  
}





// getNewsByCountry(countryCode: string) {
//   const url = `${this.baseUrl}?country=${countryCode}&apiKey=${this.apiKey}`;
//   return this.http.get(url);
// }