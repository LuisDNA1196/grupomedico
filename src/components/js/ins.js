document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
  
    if (carousel) {
      const slides = document.querySelectorAll('.carousel-slide');
      const totalSlides = slides.length;
      let currentIndex = 0;
  
      function showSlide(index) {
        carousel.style.transform = `translateX(${-index * 100}%)`;
      }
  
      function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        showSlide(currentIndex);
      }
  
      function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        showSlide(currentIndex);
      }
  
      const prevButton = document.getElementById('prevButton');
      const nextButton = document.getElementById('nextButton');
  
      if (prevButton) {
        prevButton.addEventListener('click', prevSlide);
      }
  
      if (nextButton) {
        nextButton.addEventListener('click', nextSlide);
      }
  
      // Cambio automático de imagen cada 4 segundos
      setInterval(function () {
        nextSlide();
      }, 5000);
    }
  });