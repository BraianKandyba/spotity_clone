import { Component, Input } from '@angular/core';
import { MainService } from '../../main.service';
import { ActivatedRoute } from '@angular/router';
import { Cancion, Listas } from '../../modelos/listas';

@Component({
  selector: 'app-albunes',
  templateUrl: './albunes.component.html',
  styleUrl: './albunes.component.scss'
})
export class AlbunesComponent {

  constructor(private mainService: MainService,private route: ActivatedRoute){}

  dataAlbunes: Listas [] = [];
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
    this.mainService.getAlbunes().subscribe({
      next: (albunes) => {
        this.dataAlbunes = albunes;
        this.singleData = this.dataAlbunes.length > 0 ? this.dataAlbunes[0] : null; // Obtener el primer dato
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
    const albumClasses: { [key: string]: string } = {
      "1": 'background-albun-1',
      "2": 'background-albun-2',
      "3": 'background-albun-3',
      "4": 'background-albun-4',
    }; 
    
    return albumClasses[this.lista.id] || 'default-background';
  }
}
