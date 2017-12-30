import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { MapData } from '../models/map-data';
import { PointData, Point } from '../models/interface';

@Injectable()
export class MapOverlaysService {
  constructor(private http: Http) {
  }

  public getData(url: string): Observable<google.maps.Marker[]> {
    return this.http.get(url).map((res: Response) => {
      let overlays: google.maps.Marker[] = [];
      (<Point[]>res.json().points).map(item => {
        overlays.push(
          new google.maps.Marker({ position: item.position, title: item.title })
        )
      });
      return overlays;
    });
  }
}
