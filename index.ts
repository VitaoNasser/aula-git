import { Cachorro } from "./models/Cachorro";
import { Vacina } from "./models/Vacina";

let cachorro1:Cachorro = {
    nome:"Pilico",
    raca: "SRD",
    manso:true,
    dataNascimento: new Date('2020-05-14'),
    vacinas: [],
    donos: ['Victor', 'Fernanda']
}

function vacinarCachorro(cachorro:Cachorro, vacina:Vacina){
    cachorro.vacinas.push(vacina);
    console.log(`${cachorro.nome} foi vacinado com ${vacina}`);
}

vacinarCachorro(cachorro1,{nome:"Antirrábica", dataDeAplicacao: new Date()});
console.log(cachorro1);



