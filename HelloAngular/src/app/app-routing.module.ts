import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent }
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
