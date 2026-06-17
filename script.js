let titulo;
let data;
let texto;
let imagem;

function setup() {

  titulo = "A Invasão da Polônia";
  
  data = "1 de setembro de 1939";
  
  imagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2up8Neq6uLci-GD2Xi7wRJ-v7svIzifbcg&s";
  
  texto =
  "Em 1 de setembro de 1939, a Alemanha invadiu a Polônia." +
  "<br><br>" +
  "A invasão utilizou a estratégia conhecida como Blitzkrieg, ou guerra-relâmpago." +
  "<br><br>" +
  "Tanques, aviões e tropas motorizadas avançaram rapidamente pelo território polonês." +
  "<br><br>" +
  "Poucos dias depois, Reino Unido e França declararam guerra à Alemanha." +
  "<br><br>" +
  "Esse acontecimento marcou oficialmente o início da Segunda Guerra Mundial.";

  mostrarEvento();
}

function mostrarEvento() {

  document.getElementById("evento").innerHTML =
  `
  <div class="artigo">

    <img src="${imagem}" alt="Invasão da Polônia">

    <h2>${titulo}</h2>

    <p class="data">${data}</p>

    <p>${texto}</p>

  </div>
  `;
}

setup();
