const container = document.querySelector('.container');

for (var i = 0; i <=128; i++){
const blocks = document.createElement('div');
blocks.classList.add('block');
container.appendChild(blocks);
}

function animateBlock() {
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-1200, 1200);
        },
        translateY: function(){
            return anime.random(-600, 600);
        },
        scale: function(){
            return anime.random(1, 6);
        },
        easing: 'linear',
        duration: 10000,
        delay: anime.stagger(60),
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
  slides[slideIndex-1].style.display = "block";

}
