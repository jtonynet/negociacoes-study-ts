import { NegociacaoDoDia } from "../interfaces/negociacao-do-dia";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {
    public obterNegociacoes(): Promise<Negociacao[]> {
       return fetch('http://localhost:3003/dados')
            .then(res => res.json())
            .then((dados: NegociacaoDoDia[]) => {
                return dados.map(dadoDeHoje => {
                    return new Negociacao(
                        new Date(),
                        dadoDeHoje.vezes,
                        dadoDeHoje.montante);
                })
            })
    }
}