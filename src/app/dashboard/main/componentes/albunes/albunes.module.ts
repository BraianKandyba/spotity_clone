import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbunesRoutingModule } from './albunes-routing.module';
import { AlbunesComponent } from './albunes.component';


@NgModule({
  declarations: [
    AlbunesComponent
  ],
  imports: [
    CommonModule,
    AlbunesRoutingModule
  ],
  exports:[
    AlbunesComponent
  ]
})
export class AlbunesModule { }
