const header = document.querySelector('header');

window.addEventListener('mousemove', (e) => {
  if (e.clientY < 50) {
    header.classList.remove('header-hidden');
  } else {
    header.classList.add('header-hidden');
  }
});
