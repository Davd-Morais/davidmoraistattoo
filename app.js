const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

const botoes = document.querySelectorAll('.seta');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    const carrossel = botao.parentElement.querySelector('.carrossel');
    const direcao = botao.classList.contains('direita') ? 1 : -1;
    const scrollQuantidade = carrossel.offsetWidth * 0.8;

    carrossel.scrollBy({
      left: scrollQuantidade * direcao,
      behavior: 'smooth'
    });
  });
});