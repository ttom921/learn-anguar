import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyPreloadingStrategy } from './common/my-preloading-strategy';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'jokes',
    data: { preload: true },
    loadChildren: () => import('./jokes/jokes.module').then(m => m.JokesModule)
  },
  {
    path: 'picture',
    data: { preload: false },
    loadChildren: () => import('./picture/picture.module').then(m => m.PictureModule)
  },
  {
    path: 'text',
    data: { preload: true },
    loadChildren: () => import('./text/text.module').then(m => m.TextModule)
  },
  //通配符匹配必須寫在最後一個
  {
    path: '**',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { enableTracing: true }),
    //RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { preloadingStrategy: MyPreloadingStrategy }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
