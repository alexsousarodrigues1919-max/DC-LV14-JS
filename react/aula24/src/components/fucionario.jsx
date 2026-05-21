/*Crie um componente que permita que o usuário digite 3 campos: nome, email e cargo. Os campos devem ser exibidos na tela quando o usuário clicar no botão "Cadastrar Funcionário".
Dicas: Use o hook useState para armazenar os valores dos campos. Serão necessários 4 variáveis de estado controlado: nome, email, cargo e objFuncionario.

//Para nome, email e cargo usaremos inputs do type text e email, com o evento onChange
//Para o botão usaremos o evento onClick e irá atualizar o estado do objFuncionario com os valores digitados nos inputs
*/

import { useState } from "react";

export default function Funcionario() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cargo, setCargo] = useState("");
    const [objFuncionario, setObjFuncionario] = useState({});

    return (
        <>
            <input type="text" onChange={(e) => setNome(e.target.value)} /><br />
            <input type="email" onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="text" onChange={(e) => setCargo(e.target.value)} /><br />
            <button onClick={() => setObjFuncionario({nome, email, cargo})}>Cadastrar Funcionario</button>
            <p>{objFuncionario.nome}</p>
            <p>{objFuncionario.email}</p>
            <p>{objFuncionario.cargo}</p>
        </>
    );
}

