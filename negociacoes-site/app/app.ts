import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacaoView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});

//const negociacaoView = new NegociacaoView;
//const template = negociacaoView.template()
//console.log(template);