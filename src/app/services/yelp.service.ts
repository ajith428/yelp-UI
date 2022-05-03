import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const yelpPath: string = 'http://localhost:9100/yelp/reviews';

@Injectable({
  providedIn: 'root',
})
export class YelpService {
  constructor(private http: HttpClient) {}

  getReviews(business: string, location: string, context: any) {
    this.http
      .get(yelpPath + '?term=' + business + '&location=' + location)
      .subscribe((res) => {
        console.log(res);
        context.setBusinessReviews(res);
      });
  }
}
