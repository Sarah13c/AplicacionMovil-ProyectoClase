import { Component, Input, OnInit, input } from '@angular/core';
import { Router } from '@angular/router';
import { FotoHeroe } from 'src/app/interfaces/fotosHeroe.interface';
import { Heroe, HeroeBD } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent  implements OnInit {

  @Input () unosHeroes: HeroeBD [] = [];
  
  @Input () tipo!: string;

  constructor(private router:Router) { }

  ngOnInit() {}

  navegarHeroe(unId:any){
    this.router.navigate(['/det-heroe', unId])
  }

  irFotos(unId:any){
    this.router.navigate(['/fotos-heroe', unId])
  }

}
