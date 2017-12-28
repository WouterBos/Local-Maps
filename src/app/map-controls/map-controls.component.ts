import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MapsService } from '../services/maps.service';
import { Map } from '../models/interface'

@Component({
  selector: 'app-map-controls',
  templateUrl: './map-controls.component.html',
  styleUrls: ['./map-controls.component.css']
})
export class MapControlsComponent implements OnInit {
  title = 'Shoppen bij de boer';
  maps: Map[];
  
  public constructor(private pageTitle: Title, private mapsService: MapsService) {
    this.maps = this.mapsService.getMaps();
    let active = this.mapsService.getActiveMap();
    this.showMap(this.maps[active].id, this.maps[active].title);
  }

  ngOnInit() {
  }

  onMapSelect(event: any): void {
    this.maps.map(m => {
      if (m.id == event.target.value) {
        this.showMap(m.id, m.title);
        this.mapsService.setActiveMap(m.id);
      }
    })
  }

  showMap(id: string, title: string): void {
    this.pageTitle.setTitle(title);
  }
}
