import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artistas } from './modelos/main';
import { environment } from '../../../enviroment/enviroment';
import { delay } from 'rxjs';
import { Listas } from './modelos/listas';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor( private httpClient: HttpClient) { }

  getArtistas(){ 
    return this.httpClient.get<Artistas[]>(`${environment.apiURL}/artistas`).pipe(delay(500))
  }


  getListas(){
    return this.httpClient.get<Listas[]>(`${environment.apiURL}/listas`).pipe(delay(500))

  }

  getAlbunes(){
    return this.httpClient.get<Listas[]>(`${environment.apiURL}/albunes`).pipe(delay(500))
  }
}
