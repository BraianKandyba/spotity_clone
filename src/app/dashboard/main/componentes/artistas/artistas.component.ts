import { Component, Input } from '@angular/core';
import { Artistas } from '../../modelos/main';
import { MainService } from '../../main.service';

@Component({
  selector: 'app-artistas',
  templateUrl: './artistas.component.html',
  styleUrl: './artistas.component.scss'
})
export class ArtistasComponent {

  constructor(private mainService: MainService){}

  dataArtistas: Artistas [] = [];
  @Input() art: Artistas | null = null;
  singleData: Artistas | null = null;


  ngOnInit(): void {
    this.getArt();

}  

  getArt() {
    this.mainService.getArtistas().subscribe({
      next: (lis) => {
        this.dataArtistas = lis;
        this.singleData = this.dataArtistas.length > 0 ? this.dataArtistas[0] : null; // Obtener el primer dato
        console.log(this.singleData);
      },
      complete: () => {
        console.log('completado');
      }
    });
  }

  getClass(){
    if (!this.art|| !this.art.id) {
      return 'default-background';
    }
    const albumClasses: { [key: string]: string } = {
      "1": 'background-albun-1',
      "2": 'background-albun-2',
      "3": 'background-albun-3',
      "4": 'background-albun-4',
    }; 
    
    return albumClasses[this.art.id] || 'default-background';
  }

}
