import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroeBD } from 'src/app/interfaces/heroes.interface';
import { HeroesBDService } from 'src/app/services/heroes-bd.service';
import { HeroesServiceService } from 'src/app/services/heroes-service.service';

@Component({
  selector: 'app-det-heroe',
  templateUrl: './det-heroe.page.html',
  styleUrls: ['./det-heroe.page.scss'],
})
export class DetHeroePage implements OnInit {

  unId!:any;
  unHeroe!:HeroeBD;

  constructor(route: ActivatedRoute, //private data:HeroesServiceService 
  private databd:HeroesBDService) { 
    this.unId = route.snapshot.params["id"];
    console.log(this.unId);

    //this.unHeroe = data.getUnHeroe(this.unId);

    //console.log(this.unHeroe)
    this.getUnHeroeBD(this.unId)
  }

  async getUnHeroeBD(unIdHeroe:string){
    await this.databd
    .getUnHeroe(unIdHeroe)
    .toPromise()
    .then((data:any)=> {
      this.unHeroe = data.resp;
      console.log(this.unHeroe);
    })
  }

  ngOnInit() {
  }

}
