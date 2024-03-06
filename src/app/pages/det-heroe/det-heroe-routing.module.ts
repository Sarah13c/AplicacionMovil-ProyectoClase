import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetHeroePage } from './det-heroe.page';

const routes: Routes = [
  {
    path: '',
    component: DetHeroePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetHeroePageRoutingModule {}
