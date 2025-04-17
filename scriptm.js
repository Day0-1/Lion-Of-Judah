let slideIndex = 0, slides, dots, timer;

function showSlides(n) {
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) dots[i].className = dots[i].className.replace(" active", "");
  slideIndex = n > slides.length ? 1 : n < 1 ? slides.length : n;
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  timer = setTimeout(() => showSlides(slideIndex + 1), 5000);
}

function setSlide(n) {
  clearTimeout(timer);
  showSlides(n);
}

function pause() {
  clearTimeout(timer);
}

function resume() {
  timer = setTimeout(() => showSlides(slideIndex + 1), 5000);
}

window.onload = () => showSlides(slideIndex = 1);
