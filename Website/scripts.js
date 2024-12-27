function bookNow() {
    window.location.href = 'booking.html';
}

let currentIndex = 0;

function showSlide(index) {
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  if (index < 0) {
    currentIndex = totalItems - 1;
  } else if (index >= totalItems) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}
