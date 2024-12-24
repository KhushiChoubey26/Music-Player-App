import { Component } from '@angular/core';
import { MusicService } from './services/music.service';
import { MusicPlayerState } from './helpers/music-player-state';
import * as moment from 'moment';
import { tracks } from './helpers/tracks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  state = MusicPlayerState;
  readonly tracks = tracks;
  playbackSpeeds = [1, 2, 3, 4, 5];


  constructor(public musicService: MusicService) {}

  ngOnInit(): void {
  }

  goToTime(change: any) {
    this.musicService.goToTime(change.value);
  }

  getFormattedTime(timeInSeconds: number) {
    return moment.utc(timeInSeconds * 1000).format('mm:ss');
  }

  
  
  pause() {
    this.musicService.pause();
  }

  resume() {
    this.musicService.resume();
  }

  next() {
    const index = tracks.indexOf(this.state.activeTrack) + 1;
    if (index < tracks.length) {
      this.state.activeTrack = tracks[index];
      this.musicService.playNewFile(tracks[index]);
    }
  }
  
  previous() {
    const index = tracks.indexOf(this.state.activeTrack) - 1;
    if (index >= 0) {
      this.state.activeTrack = tracks[index];
      this.musicService.playNewFile(tracks[index]);
    }
  }
  changePlaybackSpeed(speed: number) {
    this.musicService.changePlaybackSpeed(speed);
  }
  

}