// Animação simples para as imagens da seção "animada"
const imagens = document.querySelectorAll('.animada img');

function animarImagens() {
  imagens.forEach((img, idx) => {
    setTimeout(() => {
      img.classList.add('ativo');
    }, idx * 500);
  });
}

window.addEventListener('load', animarImagens);
