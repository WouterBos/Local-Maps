import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MapsService } from '../services/maps.service';
import { Map } from '../models/interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map-controls',
  templateUrl: './map-controls.component.html',
  styleUrls: ['./map-controls.component.css']
})
export class MapControlsComponent implements OnInit {
  title = 'Shoppen bij de boer';
  maps: Map[];
  activeId: string;
  
  public constructor(private pageTitle: Title, private mapsService: MapsService, private router: Router, private route: ActivatedRoute) {
    this.maps = this.mapsService.getMaps();
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { id: string }) => {
        this.mapsService.setActiveMap(data.id);
        let index = this.mapsService.getActiveMap();
        this.activeId = data.id;
        this.showMap(this.maps[index].id, this.maps[index].title);
        this.router.navigate(['map/' + this.maps[index].id]);
      });
    }

  onMapSelect(event: any): void {
    this.maps.map(m => {
      if (m.id == event.target.value) {
        this.showMap(m.id, m.title);
        this.mapsService.setActiveMap(m.id);
        this.activeId = m.id;
        this.router.navigate(['map/' + m.id]);
      }
    })
  }

  showMap(id: string, title: string): void {
    this.pageTitle.setTitle(title);
  }
}
