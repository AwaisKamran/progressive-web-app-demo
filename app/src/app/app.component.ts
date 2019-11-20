import { Component } from '@angular/core';
import { StatsService } from './service/stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public aqiIndexString: string;
  public colorCode: string;
  public aqiIndexObj: any;
  public imageIndex: number = -1;
  public hasAqi: boolean = false;

  constructor(
    public statsService: StatsService
  ) {
    this.statsService.getAirQualityIndex().subscribe(
      (res: any) => {
        this.hasAqi = true;
        this.aqiIndexObj = res.data;
        this.evaluateAQI(res.data.aqi);
      },
      (err) => { 
        this.hasAqi = false;
      }
    )
  }

  evaluateAQI(index) {
    if (index <= 50) {
      this.aqiIndexString = 'Good';
      this.colorCode = '#52B947';
      this.imageIndex = 1;
    }
    else if (index > 50 && index < 100) {
      this.aqiIndexString = 'Moderate';
      this.colorCode = '#4D4D59';
      this.imageIndex = 2;
    }
    else if (index > 100 && index <= 150) {
      this.aqiIndexString = 'Unhealthy for sensitive group';
      this.colorCode = '#FAAD6F';
      this.imageIndex = 3;
    }
    else if (index > 150 && index <= 200) {
      this.aqiIndexString = 'Unhealthy';
      this.colorCode = '#ED1D24';
      this.imageIndex = 4;
    }
    else if (index > 200 && index <= 300) {
      this.aqiIndexString = 'Very Unhealthy';
      this.colorCode = '#7E2B7D';
      this.imageIndex = 5;
    }
    else if (index > 300 && index <= 500) {
      this.aqiIndexString = 'Hazardous';
      this.colorCode = '#480D27';
      this.imageIndex = 6;
    }
    else{
      this.hasAqi = false;
    }
  }
}
