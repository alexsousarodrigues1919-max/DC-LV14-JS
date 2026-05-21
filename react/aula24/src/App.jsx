import { useState } from "react";
import "./App.css";
import CardProduto from "./components/CardProduto";
import Tabuada from "./components/Tabuada";
import ListagemProdutos from "./components/listarProdutos";
import Funcionario from "./components/fucionario";

function App() {
  const [count, setCount] = useState(0);

  const produtos = [
    {
      imagem: "https://placehold.co/400x400",
      nome: "Produto 1",
      preco: 100,
      descricao: "Descrição do produto 1",
      promocao: true,
      desconto: 10,
    },
    {
      imagem: "https://placehold.co/400x400",
      nome: "Produto 2",
      preco: 200,
      descricao: "Descrição do produto 2",
      promocao: false,
      desconto: 0,
    },
    {
      imagem: "https://placehold.co/400x400",
      nome: "Produto 3",
      preco: 300,
      descricao: "Descrição do produto 3",
      promocao: true,
      desconto: 20,
    },
  ];

  return (
    <>
      <h1>Aula24</h1>
      <div id="atividade03" className="oculta">
        <CardProduto
          imagem="https://placehold.co/400x400"
          nome="Produto 1"
          preco={10.00}
          descricao="Descrição do produto 1"
          promocao={true}
          desconto={10}
        />
        <CardProduto
          imagem="https://placehold.co/400x400"
          nome="Produto 2"
          preco={200}
          descricao="Descrição do produto 2"
          promocao={false}
          desconto={0}
        />
      </div>
      <div id="atividade01" className="oculta">
        <Tabuada />
      </div>

      <div id="atividade02" className="oculta">
        <ListagemProdutos categoria="Categoria 1" arrayProdutos={produtos} />
      </div>

      <div id="atividade03">
        <Funcionario />
      </div>
    </>
  );
}

export default App;
