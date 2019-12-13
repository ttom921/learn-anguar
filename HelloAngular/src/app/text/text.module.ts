import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextRoutingModule } from './text-routing.module';
import { TextComponent } from './text.component';
import { ShareModule } from '../_shared/share.module';


@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    ShareModule,
    TextRoutingModule
  ]
})
export class TextModule { }
