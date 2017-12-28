import { Injectable } from '@angular/core';
import { Map } from '../models/interface'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MapsService {
  maps: Map[];
  active = 0;
  activeMap$: Observable<Map>;
  private updateActiveMap$ = new Subject<Map>();

  constructor() {
    this.activeMap$ = this.updateActiveMap$.asObservable();
    this.maps = [
      {
        id: 'shoppen-bij-de-boer',
        title: 'Shoppen bij de boer',
        url: 'assets/data/shop.json'
      },
      {
        id: 'wandelpunten',
        title: 'Wandelpunten',
        url: 'assets/data/wandelpunten.json'
      }
    ]
  }

  getActiveMap(): number {
    return this.active;
  }

  setActiveMap(id: string) {
    this.active = this.maps.indexOf(this.maps.find(map => map.id === id));
    this.updateActiveMap$.next(this.maps.find(map => map.id === id));
  }

  getMaps(): Map[] {
    return this.maps;
  }
}
