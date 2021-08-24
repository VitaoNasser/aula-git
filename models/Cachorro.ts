import { Vacina } from "./Vacina";
export interface Cachorro {
    nome: string;
    raca: string;
    manso: boolean;
    dataNascimento: Date;
    vacinas:Vacina[];
    donos:string[];
}



