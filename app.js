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


// Para cada carrossel-wrapper, cria bolinhas e controla o scroll
document.querySelectorAll('.carrossel-wrapper').forEach(wrapper => {
  const carrossel = wrapper.querySelector('.carrossel');
  const imagens = carrossel.querySelectorAll('img');
  const indicadoresContainer = wrapper.querySelector('.indicadores');

  // Limpa os indicadores antes de recriar
  indicadoresContainer.innerHTML = "";

  // Criar bolinhas
  imagens.forEach((_, index) => {
    const indicador = document.createElement('span');
    if (index === 0) indicador.classList.add('ativo');
    indicador.addEventListener('click', () => {
      carrossel.scrollTo({
        left: carrossel.offsetWidth * index,
        behavior: 'smooth'
      });
    });
    indicadoresContainer.appendChild(indicador);
  });

  // Atualizar ativo conforme scroll
  carrossel.addEventListener('scroll', () => {
    const index = Math.round(carrossel.scrollLeft / carrossel.offsetWidth);
    const todos = indicadoresContainer.querySelectorAll('span');
    todos.forEach(b => b.classList.remove('ativo'));
    if (todos[index]) todos[index].classList.add('ativo');
  });

  // Garantir que comece na primeira imagem
  carrossel.scrollLeft = 0;
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

const track = document.querySelector('.carousel-track');
const cards = Array.from(document.querySelectorAll('.arte-card'));
const dotsContainer = document.querySelector('.carousel-dots');

let currentIndex = 0;

// Criar bolinhas
cards.forEach((_, index) => {
    const dot = document.createElement('button');
    if (index === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);

    dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(${-cardWidth * currentIndex}px)`;

    const dots = document.querySelectorAll('.carousel-dots button');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}