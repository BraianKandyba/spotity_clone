export interface Cancion {
    titulo: string;
    artista: string;
    duracion: string;
}

export interface Listas{
    id: string;
    genero: string;
    img: string;
    canciones: Cancion[];
    showCanciones?: boolean;
}