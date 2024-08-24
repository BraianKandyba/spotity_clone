import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistasRoutingModule } from './artistas-routing.module';
import { ArtistasComponent } from './artistas.component';


@NgModule({
  declarations: [
    ArtistasComponent
  ],
  imports: [
    CommonModule,
    ArtistasRoutingModule
  ],
  exports:[
    ArtistasComponent
  ]
})
export class ArtistasModule { }
