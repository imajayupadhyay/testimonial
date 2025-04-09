
  const track = document.getElementById('testism-track');
  const slides = document.querySelectorAll('.testism-slide');
  const totalSlides = slides.length;
  let current = 0;

  function updateSlidePosition() {
    const offset = -current * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  function nextTestism() {
    current = (current + 1) % totalSlides;
    updateSlidePosition();
  }

  function prevTestism() {
    current = (current - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
  }

  setInterval(nextTestism, 5000);
