const imageSlide = document.querySelector('.image-slide');
const images = document.querySelectorAll('.image-slide img')
//buttom
const preBtn = document.querySelector('#prebtn');
const nextBtn = document.querySelector('#nextbtn');
//counter
let counter = 1;
const size = images[0].clientWidth;


imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
//button listenr

nextBtn.addEventListener('click', () => {
  imageSlide.style.transition = "transfrom 0.4s ease-in-out";
  counter++;
  imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
});

preBtn.addEventListener('click', () => {
  imageSlide.style.transition = "transfrom 0.4s ease-in-out";
  counter--;
  imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
});
