const slides = document.querySelectorAll('.testism-slide');
  let current = 0;

  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextTestism() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  function prevTestism() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  }

  // Auto-play
  setInterval(() => {
    nextTestism();
  }, 5000);
