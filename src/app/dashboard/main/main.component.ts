import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Artistas } from './modelos/main';
import { Listas } from './modelos/listas';
import { Router } from '@angular/router';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  data:Artistas [] = [];
  dataLista: Listas [] = [];
  dataAlbunes: Listas [] = [];

  selectedLista: Listas | null = null;  
  selectedAlbun: Listas | null = null;
  selectedArtistas: Artistas | null = null;
  
  
  constructor(private mainService: MainService){}

  ngOnInit(): void {
    this.getArtistas();
    this.getlistas();
    this.getAlbunes();
}  


  getArtistas(){
    this.mainService.getArtistas().subscribe({
      next: (art) =>{
        this.data = art;
        console.log(this.data)
        
      },
      complete: ()=>{
        console.log('completado');
      }
    }) 
  } 



  getlistas(){
    this.mainService.getListas().subscribe({
      next: (listas) =>{
        this.dataLista = listas
        console.log(this.dataLista)
        
      },
      complete: ()=>{
        console.log('listas completado');
      }
    }) 
  }
  
  getAlbunes(){
    this.mainService.getAlbunes().subscribe({
      next: (albunes) =>{
        this.dataAlbunes = albunes
        console.log(this.dataAlbunes)
        
      },
      complete: ()=>{
        console.log('albunes completado');
      }
    }) 
  } 

  selectLista(lista: Listas) {
    this.selectedLista = lista;
    console.log('completado lsita');
  }

  selectAlbun(listaAlbunes: Listas) {
    this.selectedAlbun = listaAlbunes;
    console.log('completado Albun');
  }

  selectArtista(listaArtistas: Artistas) {
    this.selectedArtistas = listaArtistas;
    
  }
  closeSeleccion(){
    this.selectedAlbun = null;
    this.selectedLista = null;
    this.selectedArtistas = null;
  }


}
