
const botao = document.querySelector("#botao");

botao.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
 const texto = document.querySelector("#entrada").value;
const campoResultado = document.querySelector("#resultado");
const palavras = texto.split(" ");
campoResultado.textContent = palavras.join(", ");
}