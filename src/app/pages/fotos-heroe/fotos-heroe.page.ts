import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoHeroe } from 'src/app/interfaces/fotosHeroe.interface';
import { FotosHeroeServiceService } from 'src/app/services/fotos-heroe-service.service';


@Component({
  selector: 'app-fotos-heroe',
  templateUrl: './fotos-heroe.page.html',
  styleUrls: ['./fotos-heroe.page.scss'],
})
export class FotosHeroePage implements OnInit {

  unasFoto!:FotoHeroe[];
  unIdHeroe!:any;

  constructor(route: ActivatedRoute, private data:FotosHeroeServiceService) { 
    this.unIdHeroe = route.snapshot.params["id"];
    console.log(this.unIdHeroe);

    this.unasFoto = data.getFotosIdHeroe(this.unIdHeroe);
    console.log(this.unasFoto)
  }

  ngOnInit() {
  }

}
