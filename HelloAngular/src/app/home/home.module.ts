import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PictureComponent } from './picture/picture.component';
import { TextComponent } from './text/text.component';
import { ShareModule } from '../_shared/share.module';


@NgModule({
  declarations: [HomeComponent, PictureComponent, TextComponent],
  imports: [
    CommonModule,
    ShareModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
