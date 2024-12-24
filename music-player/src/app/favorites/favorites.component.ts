import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { MusicPlayerState } from '../helpers/music-player-state';
import { tracks } from '../helpers/tracks';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  state = MusicPlayerState;
  favTracks: any = [];

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    tracks.forEach((track) => {
      if (track.isFavorite === true) {
        this.favTracks.push(track);
      }
    });
  }

  playTrack(file: any) {
    this.musicService.playNewFile(file);
  }

  removeFromFavorites(index: any) {
    tracks[tracks.indexOf(this.favTracks[index])].isFavorite = false;
    this.favTracks.splice(index, 1);
  }
}