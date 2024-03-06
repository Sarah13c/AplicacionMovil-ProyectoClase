import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'det-heroe/:id',
    loadChildren: () => import('./pages/det-heroe/det-heroe.module').then( m => m.DetHeroePageModule)
  },
  {
    path: 'fotos-heroe/:id',
    loadChildren: () => import('./pages/fotos-heroe/fotos-heroe.module').then( m => m.FotosHeroePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
