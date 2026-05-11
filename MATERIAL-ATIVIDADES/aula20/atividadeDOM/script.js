
// getElementById
const lampada = document.getElementById("lampada");

// querySelector
const mensagem = document.querySelector(".mensagem");
const body = document.querySelector("body");

// querySelectorAll
const botoes = document.querySelectorAll("button");

// getElementsByClassName
const cards = document.getElementsByClassName("card");

// getElementsByTagName
const titulos = document.getElementsByTagName("h1");


// BOTÕES


const btnAcender = document.querySelector(".btn-acender");
const btnApagar = document.querySelector(".btn-apagar");
const btnQuebrar = document.querySelector(".btn-quebrar");
const btnTrocar = document.querySelector(".btn-trocar");


// ESTADO DA LÂMPADA


let quebrada = false;



// ACENDER
function acenderLampada() {

  if (quebrada) {
    mensagem.innerText = "Erro: a lâmpada está quebrada!";
    mensagem.style.color = "#ff4d4d";
    return;
  }

  lampada.src = "img/acesa.png";
  lampada.alt = "Lâmpada acesa";

  body.style.background = "#f5f5f5";

  mensagem.innerText = "Lâmpada acesa!";
  mensagem.style.color = "#111";

  // altera título
  titulos[0].style.color = "#111";

  // altera botões
  botoes.forEach((botao) => {
    botao.style.background = "#e5e5e5";
    botao.style.color = "#111";
  });

  // altera cards
  for (let i = 0; i < cards.length; i++) {
    cards[i].style.background = "#ffffff";
  }
}

// APAGAR
function apagarLampada() {

  if (quebrada) {
    mensagem.innerText = "A lâmpada está quebrada!";
    mensagem.style.color = "#ff4d4d";
    return;
  }

  lampada.src = "img/apagada.png";
  lampada.alt = "Lâmpada apagada";

  body.style.background = "#050505";

  mensagem.innerText = "Lâmpada apagada!";
  mensagem.style.color = "#ffffff";

  titulos[0].style.color = "#ffffff";

  botoes.forEach((botao) => {
    botao.style.background = "#2c2c2c";
    botao.style.color = "#ffffff";
  });

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.background = "#111";
  }
}

// QUEBRAR
function quebrarLampada() {

  quebrada = true;

  lampada.src = "img/quebrada.png";
  lampada.alt = "Lâmpada quebrada";

  body.style.background = "#000";

  mensagem.innerText = "Erro: a lâmpada está quebrada!";
  mensagem.style.color = "#ff4d4d";

  titulos[0].style.color = "#ffffff";

  botoes.forEach((botao) => {
    botao.style.background = "#2c2c2c";
    botao.style.color = "#ffffff";
  });

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.background = "#111";
  }
}

// TROCAR
function trocarLampada() {

  quebrada = false;

  lampada.src = "img/apagada.png";
  lampada.alt = "Lâmpada apagada";

  body.style.background = "#050505";

  mensagem.innerText = "Lâmpada trocada com sucesso!";
  mensagem.style.color = "#4dff88";

  titulos[0].style.color = "#ffffff";

  botoes.forEach((botao) => {
    botao.style.background = "#2c2c2c";
    botao.style.color = "#ffffff";
  });

  for (let i = 0; i < cards.length; i++) {
    cards[i].style.background = "#111";
  }
}



btnAcender.onclick = acenderLampada;

btnApagar.onclick = apagarLampada;

btnQuebrar.onclick = quebrarLampada;

btnTrocar.onclick = trocarLampada;