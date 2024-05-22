import { Component } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MusicPlayerComponent } from './music-player/music-player.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, MusicPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent { }
