import { Injectable } from '@angular/core';
import { MusicPlayerState } from '../helpers/music-player-state';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  resume() {
    throw new Error('Method not implemented.');
  }
  state = MusicPlayerState;

  audio = new Audio();

  constructor() {
    this.audio.ontimeupdate = () => {
      this.state.currentTime = this.audio.currentTime;
    };
    this.audio.oncanplay = () => {
      this.state.duration = this.audio.duration;
    };
    this.audio.onratechange = () => {
      this.state.playbackRate = this.audio.playbackRate;
    };
  }

  play() {
    this.audio.play();
    this.state.isPlaying = true;
  }

  pause() {
    this.audio.pause();
    this.state.isPlaying = false;
  }

  goToTime(seconds: number) {
    this.audio.currentTime = seconds;
    this.state.currentTime = this.audio.currentTime;
  }

  changePlaybackSpeed(speed: number) {
    this.audio.playbackRate = speed;
  }

  playNewFile(file: any) {
    this.state.isPlaying = true;
    this.state.activeTrack = file;
    this.audio.src = file.url;
    this.audio.play();
  }
}