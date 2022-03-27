import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  constructor( private http:HttpClient) {
    console.log("Servicio listo")
   }

   getQuery(query:string){
     const url=`https://api.spotify.com/v1/${query}`

     const headers=new HttpHeaders({
      'Authorization':'Bearer BQCQaO_ObRHlffDj2OBf5pCAvs9oUD6jj1zBAESUbQGVOmCeZnpIAbXm_FQffFrP-HcNNRkZlpbxjPev_gs'
    })

    return this.http.get(url, {headers});
   }


   getNewRelease(){
     return this.getQuery('browse/new-releases')
     .pipe(map((resp:any)=>{
      return resp.albums.items;
    }));
   }

   getArtistas(termino:string){

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe(map((resp:any)=> resp.artists.items));
   }

   getArtista(id:string){

    return this.getQuery(`artists/${id}`)
    //.pipe(map((resp:any)=> resp.artists.items));
   }

   getTopTracks(id:string){

    return this.getQuery(`artists/${id}/top-tracks?market=us`)
    .pipe(map((resp:any)=> resp['tracks']));
   }
  
}

   
