const container = document.querySelector('.container');

for (var i = 0; i <=100; i++){
const blocks = document.createElement('div');
blocks.classList.add('block');
container.appendChild(blocks);
}

function animateBlock() {
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-1300, 1300);
        },
        translateY: function(){
            return anime.random(-700, 700);
        },
        scale: function(){
            return anime.random(1, 5);
        },
        easing: 'linear',
        duration: 5000,
        delay: anime.stagger(5),
        complete: animateBlock,
    }) 
}

animateBlock();


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
