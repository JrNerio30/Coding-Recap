// About Title Fade In
window.addEventListener('scroll', function () {
  const headingsFade = document.querySelector('.about-fade-in');
  const headingsPosition = headingsFade.getBoundingClientRect();

  if(headingsPosition.top < window.innerHeight && headingsPosition.bottom >= 0){
    headingsFade.classList.add('visible');
  }else{
    headingsFade.classList.remove('visible')
  }
});

// Main Title Fade In
window.addEventListener('scroll', function () {
  const headingsFade = document.querySelector('.main-fade-in');
  const headingsPosition = headingsFade.getBoundingClientRect();

  if(headingsPosition.top < window.innerHeight && headingsPosition.bottom >= 0){
    headingsFade.classList.add('visible');
  }else{
    headingsFade.classList.remove('visible')
  }
});


// Footer Title Fade In
window.addEventListener('scroll', function () {
  const headingsFade = document.querySelector('.footer-fade-in');
  const headingsPosition = headingsFade.getBoundingClientRect();

  if(headingsPosition.top < window.innerHeight && headingsPosition.bottom >= 0){
    headingsFade.classList.add('visible');
  }else{
    headingsFade.classList.remove('visible')
  }
});


colorChange.addEventListener('input', function () {
  document.body.style.backgroundColor = 'hsl('+colorChange.value+', 100%, 10%)'
});

const year = new Date().getFullYear();
const copyright = `${year} ${"Fernando Nerio Jr."}`
document.querySelector('.footer-copyright').innerHTML = copyright

