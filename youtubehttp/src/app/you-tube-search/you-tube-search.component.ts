import { Component } from '@angular/core';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent {


   YOUTUBE_API_KEY: string = "AIzaSyA9qZ_G0QNUNdnJt2P36JKvrrylnmAwbMI";
   YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";
}
