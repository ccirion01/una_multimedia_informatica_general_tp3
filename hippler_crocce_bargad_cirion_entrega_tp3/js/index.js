// carousel: botones y autoplay
document.addEventListener('DOMContentLoaded', ()=> {
  const carousel = document.getElementById('carousel');
  const prev = document.querySelector('.carousel-btn.prev');
  const next = document.querySelector('.carousel-btn.next');
  const slides = carousel.querySelectorAll('.slide');
  let index = 0;

  const slideWidth = () => carousel.clientWidth;

  function goTo(i){
    index = (i + slides.length) % slides.length;
    carousel.scrollTo({left: index * slideWidth(), behavior: 'smooth'});
  }
  function nextSlide(){ goTo(index+1) }
  function prevSlide(){ goTo(index-1) }

  next.addEventListener('click', ()=>{ nextSlide(); resetTimer(); });
  prev.addEventListener('click', ()=>{ prevSlide(); resetTimer(); });

  // autoplay
  let timer = setInterval(nextSlide, 4000);

  function resetTimer(){
    clearInterval(timer);
    timer = setInterval(nextSlide, 4000);
  }

  // pausar al hover
  carousel.addEventListener('mouseenter', ()=> clearInterval(timer));
  carousel.addEventListener('mouseleave', ()=> timer = setInterval(nextSlide, 4000));

  // recalcula al redimensionar
  window.addEventListener('resize', ()=> goTo(index));
});