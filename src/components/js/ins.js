
document.addEventListener("DOMContentLoaded", function() {
  const rotatingText = document.getElementById('rotating-text');
  const texts = ["'Ese Granito'", "'Esa Manchita'", "'Esa Bolita'","'Ese Lunar'"];
  let index = 0;

  function rotateText() {
    if (rotatingText) {
      rotatingText.classList.remove('opacity-100');
      setTimeout(() => {
        rotatingText.textContent = texts[index];
        rotatingText.classList.add('opacity-100');
      }, 250); // Ajusta el tiempo según tus preferencias
      index = (index + 1) % texts.length;
    }
  }

  // Cambio inicial de texto
  rotateText();

  // Iniciar el intervalo después del cambio inicial
  setInterval(rotateText, 2000); // Cambia cada 2 segundos (ajusta el tiempo según tus preferencias)
});