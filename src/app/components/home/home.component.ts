import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent  {

  nuevasCanciones:any[]=[];
  loading:boolean;
  error:boolean;
  mensajeError:any[]=[];

  constructor( private spotify:SpotifyService) {
    this.loading=true;
    this.error=false;

    this.spotify.getNewRelease()
    .subscribe((resp:any)=>{
      console.log(resp);
      this.nuevasCanciones=resp;
      this.loading=false;
    }, (errorService) =>{
      this.error=true;
      this.mensajeError=errorService.error.error.message;
      console.log(errorService);
    })
  }
}
  
  
