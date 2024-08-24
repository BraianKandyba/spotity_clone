import { Component, Input } from '@angular/core';
import { MainService } from '../../main.service';
import { Cancion, Listas } from '../../modelos/listas';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrl: './listas.component.scss'
})
export class ListasComponent {
  
  
  constructor(private mainService: MainService,private route: ActivatedRoute){}

  dataLista: Listas [] = [];
  @Input() lista: Listas | null = null;
  
  singleData: Listas | null = null;
  selectedSongs: Cancion[] = [];

  ngOnInit(): void {
    this.getListas();

    this.route.queryParams.subscribe(params => {
      this.lista = JSON.parse(params['data']);
    });

    console.log('listaxd'+this.lista); 
}  

  getListas() {
    this.mainService.getListas().subscribe({
      next: (listas) => {
        this.dataLista = listas;
        this.singleData = this.dataLista.length > 0 ? this.dataLista[0] : null; // Obtener el primer dato
        console.log(this.singleData);
      },
      complete: () => {
        console.log('completado');
      }
    });
  }
  getClass(){
    if (!this.lista|| !this.lista.id) {
      return 'default-background';
    }
    const listaClasses: { [key: string]: string } = {
      "1": 'background-lista-1',
      "2": 'background-lista-2',
      "3": 'background-lista-3',
      "4": 'background-lista-4',
      "5": 'background-lista-5',
    };
    
    return listaClasses[this.lista.id] || 'default-background';
  }



}
