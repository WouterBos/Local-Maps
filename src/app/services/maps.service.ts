import { Injectable } from '@angular/core';
import { Maps } from '../models/interface'

@Injectable()
export class MapsService {
  maps: Maps[];

  constructor() {
    this.maps = [
      {
        id: 'shoppen-bij-de-boer',
        title: 'Shoppen bij de boer'
      },
      {
        id: 'wandelpunten',
        title: 'Wandelpunten'
      }
    ]
  }

  getMaps(): Maps[] {
    return this.maps;
  }
}
