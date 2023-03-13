// import { Inject, Injectable,  Output,
//   EventEmitter,
//   ElementRef } from "@angular/core";
// import { SearchResult } from "./you-tube-search/search-result.model";
// import { HttpClient } from "@angular/common/http";


// import 'rxjs/add/observable/fromEvent';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/switch';
// import { Observable } from "rxjs/internal/Observable";

// /**
//  * YouTubeService se povezuje na  YouTube API
//  * Pogledajte: * https://developers.google.com/youtube/v3/docs/search/list
//  */
// @Injectable()
// export class YouTubeSearchService {
//   constructor(
//     private http: HttpClient,
//     @Inject('AIzaSyA9qZ_G0QNUNdnJt2P36JKvrrylnmAwbMI') private apiKey: string,
//     @Inject("https://www.googleapis.com/youtube/v3/search") private apiUrl: string
//   ) {}

//   search(query: string): Observable<SearchResult[]> {
//     const params: string = [
//       `q=${query}`,
//       `key=${this.apiKey}`,
//       `part=snippet`,
//       `type=video`,
//       `maxResults=10`
//     ].join('&');
//     const queryUrl = `${this.apiUrl}?${params}`;
//     // return this.http.get(queryUrl).map((response: { [x: string]: any[]; }) => {
//       // return <any>response['items'].map(item => {
//       //   // console.log("raw item", item); // uklonite komentar za debug
//       //   return new SearchResult({
//       //     id: item.id.videoId,
//       //     title: item.snippet.title,
//       //     description: item.snippet.description,
//       //     thumbnailUrl: item.snippet.thumbnails.high.url
//       //   });
//       // });
//     });
//   }
// }
