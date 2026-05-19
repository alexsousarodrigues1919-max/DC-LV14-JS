import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import MeuPrimeiroComponente from "./components/MeuPrimeiroComponente";
import InfoUsuario from "./components/InfoUsuario";
import InfoUsuarioProps from "./components/InfoUsuarioProps";
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
    </>
  );
}

export default App;
