import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PictureRoutingModule } from './picture-routing.module';
import { PictureComponent } from './picture.component';
import { ShareModule } from '../_shared/share.module';


@NgModule({
  declarations: [PictureComponent],
  imports: [
    CommonModule,
    ShareModule,
    PictureRoutingModule
  ]
})
export class PictureModule { }
