import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MeuPrimeiroComponente from "./components/MeuPrimeiroComponente";
import InfoUsuario from "./components/InfoUsuario";
import InfoUsuarioProps from "./components/InfoUsuarioProps";
import CardProduto from "./components/CardProduto";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MeuPrimeiroComponente />
      <h1>Vite + React</h1>
      <div id="Atividade01">
        <InfoUsuario />
      </div>
      <div id="Atividade02">
        <InfoUsuarioProps
          nome="João"
          idade="30"
          profissao="Engenheiro de Software"
          email="5KXfH@example.com"
        />
        <InfoUsuarioProps
          nome="Maria"
          idade="25"
          profissao="Desenvolvedora Front-end"
          email="VZ2Jv@example.com"
        />
        <InfoUsuarioProps
          nome="Pedro"
          idade="28"
          profissao="Analista de Dados"
          email="tX4oH@example.com"
        />
      </div>
      <div id="Atividade03">
       <div style={{ display: "flex", gap: "20px" }}>

      {/* Card sem promoção */}
      <CardProduto
        imagem="https://placehold.co/400"
        nome="Notebook Gamer"
        preco={4500}
        descricao="Notebook potente para jogos."
        promocao={false}
      />

      {/* Card com promoção */}
      <CardProduto
        imagem="https://placehold.co/400"
        nome="Mouse RGB"
        preco={200}
        descricao="Mouse gamer com iluminação RGB."
        promocao={true}
        desconto={20}
      />
    </div>
        
      </div>
    </>
  );
}

export default App;
