import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { LeftNavComponent } from './home/left-nav/left-nav.component';
import { MainAreaComponent } from './home/main-area/main-area.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'leftNav',
        component: LeftNavComponent,
        outlet: 'left-nav'
      }, {
        path: ':id',
        component: MainAreaComponent,
        outlet: 'main-area'
      }
    ]
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [
    // RouterModule.forRoot(routes, { enableTracing: true }),
    RouterModule.forRoot(routes),
    //RouterModule.forRoot(routes, { preloadingStrategy: MyPreloadingStrategy }),
    //RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
