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

// Mostrar o botão quando a rolagem passar de 300px
window.addEventListener('scroll', function() {
  const btn = document.getElementById('scrollTopBtn');
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

// Rolar suavemente até o topo ao clicar
document.getElementById('scrollTopBtn').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});