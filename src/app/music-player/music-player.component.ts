import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'music-player',
  standalone: true,
  imports: [],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss'
})
export class MusicPlayerComponent implements AfterContentInit {
  isPlaying = false;
  audioPlayer: any;
  duration: number;
  passed: number;

  ngAfterContentInit(): void {
    this.audioPlayer = document.getElementById('audio');
  }

  onPlay() {
    this.audioPlayer.play();
    this.isPlaying = true;
    this.duration = this.audioPlayer.duration;
  }

  onStop() {
    this.audioPlayer.pause();
    this.isPlaying = false;
  }

}
