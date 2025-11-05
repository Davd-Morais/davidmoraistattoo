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

// --- Swipe para Mobile ---
let startX = 0;
let isDragging = false;

document.querySelector('.galeria-artes').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

document.querySelector('.galeria-artes').addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    // Se arrastar mais de 50px, muda o card
    if (diff > 50) {
        nextCard();
        isDragging = false;
    } else if (diff < -50) {
        prevCard();
        isDragging = false;
    }
});

document.querySelector('.galeria-artes').addEventListener('touchend', () => {
    isDragging = false;
});

function nextCard() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateCarousel();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

(function(){
  const modal = document.getElementById('dm-modal');
  const modalTitle = document.getElementById('dm-modal-title');
  const dmOld = document.querySelector('.dm-old');
  const dmNew = document.querySelector('.dm-new');
  const dmPlacement = document.getElementById('dm-placement');
  const dmSize = document.getElementById('dm-size');
  const dmOnarmImg = document.getElementById('dm-onarm-img');
  const dmWA = document.getElementById('dm-wa');
  const dmMore = document.getElementById('dm-more');
  const closeBtn = document.querySelector('.dm-modal-close');

  // Abre modal com dados do card
  function openModalFromCard(card) {
    const title = card.dataset.title || card.querySelector('h3')?.innerText || 'Arte';
    const oldPrice = card.dataset.old || card.querySelector('.preco-antigo')?.innerText || '';
    const newPrice = card.dataset.new || card.querySelector('.preco-novo')?.innerText || '';
    const placement = card.dataset.placement || 'Não especificado';
    const size = card.dataset.size || 'Não especificado';
    const onarm = card.dataset.onarm || card.querySelector('img')?.src || '';

    modalTitle.textContent = title;
    dmOld.textContent = oldPrice;
    dmNew.textContent = newPrice;
    dmPlacement.textContent = placement;
    dmSize.textContent = size;
    dmOnarmImg.src = onarm;
    dmOnarmImg.alt = `${title} — visualização no corpo`;

    // ajusta link do whatsapp para reservar com mensagem rápida
    const waBase = card.querySelector('.btn-reservar')?.dataset.wa || 'https://wa.me/';
    const message = encodeURIComponent(`Olá! Tenho interesse na arte "${title}" — valor ${newPrice}. Tenho dúvidas e quero reservar.`);
    dmWA.href = waBase.includes('?') ? waBase + '&text=' + message : waBase + '?text=' + message;

    // mostra modal
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
    // foco para acessibilidade
    closeBtn.focus();
  }

  // fecha modal
  function closeModal() {
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  // delegação: abre quando clicar em card (exceto no botão reservar)
  document.querySelectorAll('.arte-card').forEach(card => {
    // ao clicar no próprio card
    card.addEventListener('click', (ev) => {
      // se clicou no botão reservar, não abrir modal
      if (ev.target.closest('.btn-reservar')) return;
      // se clicou no botão info, abre também
      if (ev.target.closest('.btn-info') || ev.currentTarget === ev.target || !ev.target.closest('.btn-reservar')) {
        openModalFromCard(card);
      }
    });

    // abrir também ao clicar no botão "Ver detalhes"
    const infoBtn = card.querySelector('.btn-info');
    if (infoBtn) {
      infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModalFromCard(card);
      });
    }
  });

  // fechar via X
  closeBtn.addEventListener('click', closeModal);

  // fechar clicando fora do painel
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
      closeModal();
    }
  });

  // botão "Ver mais fotos" (apenas exemplo: aqui você pode abrir outra galeria ou rolar para suíte de imagens)
  dmMore.addEventListener('click', () => {
    // Exemplo simples: fecha modal e foca primeiro card (você pode implementar galeria expandida)
    closeModal();
    const firstCard = document.querySelector('.arte-card');
    if (firstCard) firstCard.scrollIntoView({behavior:'smooth', block:'center'});
  });

  // acessibilidade: trap focus minimal (mantém foco dentro do modal enquanto aberto)
  document.addEventListener('focus', function(e){
    if (modal.getAttribute('aria-hidden') === 'false' && !modal.contains(e.target)) {
      e.stopPropagation();
      closeBtn.focus();
    }
  }, true);

})();