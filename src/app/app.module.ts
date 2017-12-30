import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GMapModule } from 'primeng/primeng';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapOverlaysService } from './services/map-overlays.service';
import { MapsService } from './services/maps.service';
import { MapControlsComponent } from './map-controls/map-controls.component';

const appRoutes: Routes = [
  { path: 'map/shoppen-bij-de-boer', component: MapComponent, data: { id: 'shoppen-bij-de-boer' } },
  { path: 'map/wandelpunten', component: MapComponent, data: { id: 'wandelpunten' } },
  { path: '', redirectTo: '/map/wandelpunten', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapControlsComponent
  ],
  imports: [
    BrowserModule,
    GMapModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [MapOverlaysService, MapsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
