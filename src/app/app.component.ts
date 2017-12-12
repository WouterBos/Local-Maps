import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoppen bij de boer';

  public constructor(private pageTitle: Title) {
    this.pageTitle.setTitle(this.title);
  }
}
