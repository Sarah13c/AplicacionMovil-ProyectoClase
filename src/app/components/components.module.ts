import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeroeComponent } from './heroe/heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FotosComponent } from './fotos/fotos.component';



@NgModule({
  declarations: [
    HeroeComponent,
    HeroesComponent,
    FotosComponent
  ],
  exports: [
    HeroeComponent,
    HeroesComponent,
    FotosComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
