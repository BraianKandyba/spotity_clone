import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListasComponent } from './componentes/listas/listas.component';
import {MatTableModule} from '@angular/material/table';
import { AlbunesModule } from './componentes/albunes/albunes.module';
import { ListasModule } from './componentes/listas/listas.module';
import { ArtistasModule } from './componentes/artistas/artistas.module';


@NgModule({
  declarations: [
    MainComponent,

    
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HttpClientModule,
    MatTableModule,
    AlbunesModule,
    ListasModule,
    ArtistasModule
  ],
  exports:[
    MainComponent,
  ]
})
export class MainModule { }
