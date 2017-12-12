import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GMapModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapOverlaysService } from './services/map-overlays.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    GMapModule,
    HttpModule
  ],
  providers: [MapOverlaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
