import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [HomeComponent, PictureComponent, TextComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
