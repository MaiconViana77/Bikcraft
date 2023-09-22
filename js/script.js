// ativar links do menu
const links = document.querySelectorAll(".header-menu a");

function ativarlink(link) {
  const url = location.href;
  const href = link.href;

  url.includes;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarlink);

// ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarproduto(parametro) {
  const elemento = document.getElementById(parametro);
  console.log(elemento);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarproduto);

// perguntas frequentes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarbtn(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  console.log(ativa);

  pergunta.setAttribute("aria-expanded", "ativa");
}

function eventopergunt(pergunta) {
  pergunta.addEventListener("click", ativarbtn);
}

perguntas.forEach(eventopergunt);

// galeria de bicicleta

const galeria = document.querySelectorAll(".bicicleta-imagem img");
const container = document.querySelector(".bicicleta-imagem");

function trocarimg(event) {
  const img = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    container.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarimg);
}

galeria.forEach(eventoGaleria);


// animação 
if(window.SimpleAnime) {
  new SimpleAnime ();
}

