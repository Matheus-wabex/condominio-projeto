window.addEventListener('load', () => {
  const itens = document.querySelectorAll('.valor-item');
  itens.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, i * 300);
  });
});
