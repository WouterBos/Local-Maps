import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';
import { MapData } from '../models/map-data';

@Injectable()
export class MapOverlaysService {
  constructor(private http: Http) {
  }

  public getData(): Observable<google.maps.Marker[]> {
    return this.http.get('assets/data/shop.json').map((res: Response) => {
      let overlays: google.maps.Marker[] = [];
      (<any>res.json().points).map(item => {
        overlays.push(
          new google.maps.Marker({ position: item.position, title: item.title })
        )
      });
      return overlays;
    });
  }
}
