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
        duration: 8000,
        delay: anime.stagger(30),
        complete: animateBlock,
    }) 
}

animateBlock();

//For Slideshow (Old)
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";

}

//For 3D Carousel
var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 40;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 40;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}
