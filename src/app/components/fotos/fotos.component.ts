import { Component, Input, OnInit } from '@angular/core';
import { FotoHeroe } from 'src/app/interfaces/fotosHeroe.interface';
import { HeroeBD } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss'],
})
export class FotosComponent  implements OnInit {

  @Input () unasFoto: HeroeBD [] = [];
  
  constructor(private databd:HeroesBDService) { }

  ngOnInit() {}

  async getFotosBD(unIdHeroe:string){
    await this.databd
    .getFotosHeroe(unIdHeroe)
    .toPromise()
    .then((data:any)=> {
      this.unasFoto = data.resp;
      console.log(this.unasFoto);
    })
  }

}
