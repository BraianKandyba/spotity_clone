import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ListasComponent } from './componentes/listas/listas.component';
import { AlbunesComponent } from './componentes/albunes/albunes.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: 'listas',
        loadChildren: ()=>import('./componentes/listas/listas.module').then((m)=>m.ListasModule)
      },
      {
        path:'albunes',
        loadChildren: ()=>import ('./componentes/albunes/albunes.module').then((m)=>m.AlbunesModule)
      },
      {
        path:'artistas',
        loadChildren: ()=>import ('./componentes/artistas/artistas.module').then((m)=>m.ArtistasModule)
      }
    

    ]
  },


  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
