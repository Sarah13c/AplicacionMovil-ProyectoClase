import { Component } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroes.interface';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  unosHeroes: Heroe[] = [];
  unTipo:string ='lista';


  constructor(private data:HeroesServiceService) {
    this.unosHeroes = data.getHeroes();

    console.log("DATOS",this.unosHeroes);
  }

  cambiarEvento(event:any){
    const botonActivado = event.detail.checked;
    if (botonActivado){
      this.unTipo = 'detalle';
    }
    else{
      this.unTipo = 'lista';
  }
}



}
