import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';



@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  loadingArtist:boolean;

  artista:any={};

  topTracks:any[]=[];

  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService ) { 
                this.loadingArtist=true;
                this.router.params.subscribe(params=>
                  {
                    this.getArtista(params['id'])
                    this.getTopTracks(params['id'])
                  })
                  
              }

  

  getArtista(id:string){
    this.loadingArtist=true;

    this.spotify.getArtista(id)
    .subscribe(resp=>{
      console.log(resp);
      this.artista=resp;
      this.loadingArtist=false;
    })
    
  }

  getTopTracks(id:string){
    this.loadingArtist=true;

    this.spotify.getTopTracks(id)
    .subscribe(topTracks=>{
      console.log(topTracks);
      this.topTracks=topTracks;
    })
    
  }

}
