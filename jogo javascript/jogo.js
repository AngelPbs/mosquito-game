let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;

let criaMosquitoTempo = 1500;

let level = window.location.search;
level = level.replace("?", "");

if (level === "normal") {
  criarMosquitoTempo = 1500;
} else if (level === "dificil") {
  criarMosquitoTempo = 1000;
} else if (level === " extreme") {
  criarMosquitoTempo = 800;
}

function ajustarTamanhoJogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;

  console.log(largura, altura);
}

ajustarTamanhoJogo();

let cronometro = setInterval(function () {
  tempo -= 1;

  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosquito);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  }
}, 1000);

function posicaoRandom() {
  //Remover mosquito antes de criar um novo usando IF
  // Antes de remover verificar se já existe antes... se Sim elimina e cria outro

  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove();

    if (vidas > 3) {
      window.location.href = "fim_jogo.html";
    } else {
      document.getElementById("v" + vidas).src = "coracao_vazio.png";

      vidas++;
    }
  }

  let posicaoX = Math.floor(Math.random() * largura - 90);
  let posicaoY = Math.floor(Math.random() * altura - 90);

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  console.log(posicaoX, posicaoY);

  //Criar elemento HTML
  let mosquito = document.createElement("img");
  mosquito.src = "mosca.png";
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosquito";
  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);
}

console.log(tamanhoAleatorio());

function tamanhoAleatorio() {
  let classe = Math.floor(Math.random() * 3);

  switch (classe) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  let lado = Math.floor(Math.random() * 2);

  switch (lado) {
    case 0:
      return "ladoA";
    case 1:
      return " ladoB";
  }
}
