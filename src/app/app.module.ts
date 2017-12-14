import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GMapModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapOverlaysService } from './services/map-overlays.service';
import { MapsService } from './services/maps.service';
import { MapControlsComponent } from './map-controls/map-controls.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapControlsComponent
  ],
  imports: [
    BrowserModule,
    GMapModule,
    HttpModule
  ],
  providers: [MapOverlaysService, MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
