import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent  implements OnInit {
  @Input() unHeroe!: Heroe;

  constructor(private router:Router) { }

  irFotos(unId:any){
    this.router.navigate(['/fotos-heroe', unId])
  }

  ngOnInit() {}

}
