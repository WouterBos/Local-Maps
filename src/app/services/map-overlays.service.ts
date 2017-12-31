import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { PointData, Point } from '../models/interface';

@Injectable()
export class MapOverlaysService {
  constructor(private http: Http) {
  }

  public getData(url: string): Observable<google.maps.Marker[]> {
    return this.http.get(url).map((res: Response) => {
      let overlays: google.maps.Marker[] = [];
      (<Point[]>res.json().points).map(item => {
        let title = item.title ? item.title : null;
        let icon: any = {
          url: '/assets/' + item.type + '.svg',
          scaledSize: new google.maps.Size(40, 40),
          anchor: new google.maps.Point(20, 40)
        };

        if (item.type == "number") {
          icon = {
            url: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + item.id  + '|292C44|ffffff'
          }
        }
        
        overlays.push(
          new google.maps.Marker({
            position: item.position,
            title: title,
            icon: icon
          })
        )
      });
      return overlays;
    });
  }
}
