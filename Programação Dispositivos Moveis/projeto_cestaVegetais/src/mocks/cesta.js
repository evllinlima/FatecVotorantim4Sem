import logo from "../../assets/logo.png";

import tomate from "../../assets/vegetais/TOMATE.jpg";
import brocolis from "../../assets/vegetais/BROCOLIS.jpg";
import batata from "../../assets/vegetais/BATATA.jpg";
import pepino from "../../assets/vegetais/PEPINO.jpg";
import abobora from "../../assets/vegetais/ABOBORA.jpg";

const cesta = {
  topo: {
    titulo: "Detalhe da cesta",
  },
  detalhes: {
    logoFazenda: logo,
    nomeFazenda: "Jenny Jack Farm",
    descricao:
      "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
    preco: "R$ 40,00",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
      },
      {
        nome: "Brócolis",
        imagem: brocolis,
      },
      {
        nome: "Batata",
        imagem: batata,
      },
      {
        nome: "Pepino",
        imagem: pepino,
      },
      {
        nome: "Abóbora",
        imagem: abobora,
      },
    ],
  },
};

export default cesta;
