import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  public token;
  constructor(
    public http: HttpClient
  ) { 
    this.token = '265fe88777debc3a5e03e614ad2016b0315c468d';
  }

  getAirQualityIndex(){
    return this.http.get(`https://api.waqi.info/feed/lahore/?token=${this.token}`);
  }
}
