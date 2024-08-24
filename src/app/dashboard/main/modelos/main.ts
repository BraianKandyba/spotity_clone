import { Cancion } from "./listas";

export interface Artistas{
    id: string;
    img: string;
    nombre: string;
    desc: string;
    canciones:Cancion[];
}