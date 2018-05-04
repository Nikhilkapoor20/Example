import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
})
export class LocationComponent implements OnInit {
  location: string;
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    if (navigator.geolocation) {
      debugger;
      navigator.geolocation.getCurrentPosition(response => {
        this.http.
        get(`http://dev.virtualearth.net/REST/v1/Locations/${response.coords.latitude},${response.coords.longitude}?key=AgfXu8zLbHVul1vHZhox33c9vFsrHypXE_J7E-wO8oPQHPO8at8lt3eHSj2-2qs-`)
        .subscribe((response: any) => {
          this.location = response.resourceSets[0].resources[0].name;
        });
      });
    }
  }
}
