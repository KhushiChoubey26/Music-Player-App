import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';
import { MusicPlayerState } from '../helpers/music-player-state';
import { tracks } from '../helpers/tracks';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {

  readonly tracks = tracks;
  state = MusicPlayerState;
  
  constructor(
    private musicService: MusicService) { }

  ngOnInit(): void {
  }

  playTrack(file:any){
    this.musicService.playNewFile(file);
  }

  handleFavorites(addOrRemoveCheck:boolean, index: any){
    const isFavorite = addOrRemoveCheck === true ? true : false;
    tracks[index].isFavorite = isFavorite;      
  }
}