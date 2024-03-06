import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FotosHeroePageRoutingModule } from './fotos-heroe-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { FotosHeroePage } from './fotos-heroe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FotosHeroePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FotosHeroePage]
})
export class FotosHeroePageModule {}
