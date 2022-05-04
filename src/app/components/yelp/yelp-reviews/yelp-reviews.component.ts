import { Component, OnInit } from '@angular/core';
import { YelpService } from 'src/app/services/yelp.service';

@Component({
  selector: 'app-yelp-reviews',
  templateUrl: './yelp-reviews.component.html',
  styleUrls: ['./yelp-reviews.component.css'],
})
export class YelpReviewsComponent implements OnInit {
  constructor(private yelpService: YelpService) {}

  rating: number = 0;
  defaultProfileImage = '../../../assets/profile.png';
  starCount: number = 5;
  color: string = 'warn';

  reviewResponse: any = {
    reviews: [],
  };
  business: string = '';
  businessLoc: string = '';
  error: string = '';

  ngOnInit(): void {}

  getReviews(e: any) {
    e.preventDefault();
    if (!!this.businessLoc) {
      this.error = '';
      this.yelpService.getReviews(this.business, this.businessLoc, this);
    } else {
      this.error = 'location is required';
    }
  }

  setBusinessReviews(res: any) {
    this.reviewResponse = res;
  }
}
