import { Component } from '@angular/core';
import { CommonApiServiceService } from '../common/common-api-service.service';

@Component({
  selector: 'app-news-disply',
  templateUrl: './news-disply.component.html',
  styleUrls: ['./news-disply.component.scss']
})
export class NewsDisplyComponent {
  news:any[]=[]
  itemsToShow = 9;
  visiblenews:any[]=[]
  countries = [
    { code: 'in', name: 'India' },
    { code: 'us', name: 'United States' },
    { code: 'ar', name: 'UAE' }
  ];
  selectedCountry = 'in';  // Default value
constructor(private apicall:CommonApiServiceService){}
ngOniit(){
  this.getData()
}
async getData() {
  try {
    const data: any = await this.apicall.getNewsByCountry(this.selectedCountry);
    this.news = data.articles;
    console.log(this.news);
    this.visiblenews= this.news.slice(0,this.itemsToShow)
  } catch (error) {
    console.error('Error fetching news:', error);
  }
}
loadmore(){
  this.itemsToShow+=9;
  this.visiblenews = this.news.slice(0,this.itemsToShow)
}
 onCountryChange() {
  this.getData();
}
calculateTimeDifference(postTimestamp: any): any {
  const postDate = new Date(postTimestamp);
  const now = new Date();

  const diffInMilliseconds = now.getTime() - postDate.getTime();
  const minutes = Math.floor(diffInMilliseconds / 60000);
  const hours = Math.floor(minutes / 60);

  const displayHours = hours > 0 ? `${hours} hours` : '';
  const displayMinutes = `${minutes % 60} minutes`;

  return `${displayHours} ${displayMinutes} ago`;
}

}





