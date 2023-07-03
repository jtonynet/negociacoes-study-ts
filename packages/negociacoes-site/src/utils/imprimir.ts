import { Negociacao } from "../models/negociacao";
import { Imprimivel } from "../interfaces/imprimivel";

export function imprimir(...objetos: Imprimivel[]):void {
    for(let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
}