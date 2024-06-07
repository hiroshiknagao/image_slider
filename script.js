const imageSlide = document.querySelector('.image-slide');
const images = document.querySelectorAll('.image-slide img')
//buttom
const preBtn = document.querySelector('preBtn');
const nextBtn = document.querySelector('nextBtn');
//counter
let counter = 1;
const size = images[0].clientWidth;


imageSlide.style.transform = 'translatex(' + (-size * counter ) + 'px)';
//button listenr

nextBtn.addEventListener('click', () => {

});
