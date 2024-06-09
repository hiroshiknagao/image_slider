const imageSlide = document.querySelector('.image-slide');
const images = document.querySelectorAll('.image-slide img')
//buttom
const preBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
//counter
let counter = 1;
const size = images[0].clientWidth;


imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
//button listenr

nextBtn.addEventListener('click', () => {
  if (counter >= images.length -1) return;
  imageSlide.style.transition = "transfrom 0.4s ease-in-out";
  counter++;
  imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
});

preBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  imageSlide.style.transition = "transfrom 0.4s ease-in-out";
  counter--;
  imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
});

imageSlide.addEventListener('transitionend', () => {
  if (images[counter].id === 'lastClone') {
    imageSlide.style.transition = "none";
    counter = images.length - 2;
    imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
  }
  if (images[counter].id === 'firstClone') {
    imageSlide.style.transition = "none";
    counter = images.length - counter;
    imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
  }
});
