import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  artistas:any[]=[];


  constructor(private spotify:SpotifyService) { 
  }

  buscar(termino:string){
    this.spotify.getArtistas(termino)
    .subscribe((resp:any)=>{
      console.log(resp);
      this.artistas=resp;
    })
    
  }

}
