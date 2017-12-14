import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MapsService } from '../services/maps.service';
import { Maps } from '../models/interface'

@Component({
  selector: 'app-map-controls',
  templateUrl: './map-controls.component.html',
  styleUrls: ['./map-controls.component.css']
})
export class MapControlsComponent implements OnInit {
  title = 'Shoppen bij de boer';
  maps: Maps[];
  
  public constructor(private pageTitle: Title, private mapsService: MapsService) {
    this.maps = this.mapsService.getMaps();
    this.showMap(this.maps[0].id, this.maps[0].title);
  }

  ngOnInit() {
  }

  onMapSelect(event: any): void {
    this.maps.map(m => {
      if (m.id == event.target.value) {
        this.showMap(m.id, m.title);
      }
    })
  }

  showMap(id: string, title: string): void {
    this.pageTitle.setTitle(title);
  }
}
