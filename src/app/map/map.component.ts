import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { GMapModule } from 'primeng/primeng';
import { } from '@types/googlemaps';
import { MapData } from '../models/map-data';
import { MapOverlaysService } from '../services/map-overlays.service';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  options: google.maps.MapOptions;
  overlays: google.maps.Marker[];
  infoWindow: google.maps.InfoWindow;
  map: google.maps.Map;

  constructor(private http: Http,
              private mapOverlaysService: MapOverlaysService,
              private mapsService: MapsService) {
  }

  onMapReady(event) {
    this.map = event.map;
  }

  getData(url: string): void {
    this.mapOverlaysService.getData(url).subscribe((overlays: google.maps.Marker[]) => {
      let bounds = new google.maps.LatLngBounds();

      this.overlays = overlays;
      this.overlays.forEach(marker => {
        bounds.extend(marker.getPosition());
      });

      setTimeout(
        ()=> { this.map.fitBounds(bounds); },
        35
      );
    });
  }

  ngOnInit() {
    this.options = {
      center: {lat: 51.7788625, lng: 5.5143102},
      zoom: 15,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.RIGHT_TOP
      },
      fullscreenControl: false
    };
    this.mapsService.activeMap$.subscribe(activeMap => {
      this.setMap();
    });
    this.setMap();
  }

  setMap() {
    this.getData(this.mapsService.getMaps()[this.mapsService.getActiveMap()].url);
    this.infoWindow = new google.maps.InfoWindow();
}

  handleOverlayClick(event) {
    let isMarker = event.overlay.getTitle != undefined;
    
    if(isMarker) {
      let title = event.overlay.getTitle();
      this.infoWindow.setContent('' + title + '');
      this.infoWindow.open(event.map, event.overlay);
    }
  }  
}
