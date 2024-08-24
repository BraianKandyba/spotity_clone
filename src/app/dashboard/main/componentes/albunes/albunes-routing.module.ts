import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbunesComponent } from './albunes.component';

const routes: Routes = [
  {
    path: '',
    component: AlbunesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbunesRoutingModule { }
