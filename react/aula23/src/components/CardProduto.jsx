/*-----------------ATIVIDADE 3 ------------------
//Usando props ( propriedades ) crie um terceiro componente chamado CardProduto.jsx
//Esse card deve receber a seguinte estrutura:
//imagem (https://placehold.co/400)
//nome
//preço
//descricao


//opcionalmente esse card pode receber 2 props chamada:
// promocao que deve receber um booleano 
// uma propriedade chamada desconto que deve receber um valor numérico que indica a porcentagem de desconto 
//caso o valor da props promocao seja false, o card deve exibir o preço sem desconto e uma borda azul
//caso o valor da props promocao seja o booleano true e a props desconto seja um número, o card deve exibir 2 preços, o preço com desconto.  Além disso uma borda vermelha deve ser exibida ao redor do card caso a props promocao seja true
//Dica: use o objeto props para acessar as propriedades do componente pai ou faça a desestruturação das propriedades {propriedade1, propriedade2, ...}
//use o componente 2x com diferentes valores para as propriedades no arquivo App.jsx*/

// CardProduto.jsx
export default function CardProduto({
  imagem,
  nome,
  preco,
  descricao,
  promocao = false,
  desconto = 0,
}) {

  // cálculo do desconto
  const precoComDesconto = preco - (preco * desconto / 100);

  return (
    <div
      style={{
        border: promocao ? "3px solid red" : "3px solid blue",
        padding: "15px",
        borderRadius: "10px",
        width: "300px",
        margin: "10px",
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <h2>{nome}</h2>

      <p>{descricao}</p>

      {/* Se estiver em promoção */}
      {promocao ? (
        <div>
          <p style={{ textDecoration: "line-through", color: "gray" }}>
            R$ {preco.toFixed(2)}
          </p>

          <p style={{ color: "red", fontWeight: "bold" }}>
            R$ {precoComDesconto.toFixed(2)}
          </p>

          <p>{desconto}% OFF</p>
        </div>
      ) : (
        <p style={{ fontWeight: "bold" }}>
          R$ {preco.toFixed(2)}
        </p>
      )}
    </div>
  );
}
