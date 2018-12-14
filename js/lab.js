/******************************************************************************/
/***   A u t h o r :   N i k o l a o s   L.   K e c h r i s                 ***/
/***   I n i t i a l   D e s i g n : 23 October, 2018                       ***/
/******************************************************************************/

var slideIndex = 1;
//showSlides(slideIndex);
var slides;
var dots;

function showSlides(n) {
  var i;
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");
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

  setTimeout(plusSlides, 5000);
}

// Next/previous controls
function plusSlides(n) {
	if (!slides || !dots) {
		return;
	};
    if (!n)
	showSlides(slideIndex += 1);
	else
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	if (!slides || !dots) {
		setTimeout(showSlides(1), 1000);
		return;
	};
    if (!n)
	showSlides(slideIndex = 1);
	else
	showSlides(slideIndex = n);

}

/******************************************************************************/

/*
function myMap() {
var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.12),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
}

var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
*/

/******************************************************************************/

var ball;
var dt      = 5;
var gravity = 9.8;
var speed   = 0;
var accel   = 0.050;
var curtop  = 200;
var bottom  = 600;
var bound   = 0.2;

function moveBall(dis) {
	//alert("top=" + ball.style.top + "  val="+val);
	curtop += dis;
	ball.style.top = curtop + "px";
}

function update () {

	if (!ball) {
		ball = document.getElementById("ball");
		setTimeout(update, 1000);
		return;
	};
	
	//alert("speed="+speed+"   curtop="+curtop);	
	if (!speed)
		speed = 0;

	speed += accel;
	speed = Math.round(speed*1000)/1000;
	
	if (curtop >= bottom && speed > bound) {
		speed = speed - bound;
		speed = speed * -1;
	} else if (curtop >= bottom) {
		curtop = bottom;
		speed = 0;
		return;
	}	

	moveBall(speed);
	setTimeout(update, dt);
	
}

function load_page () {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	//alert( page );
	
	if (page=="index.html" || page=="technical.html") {
		currentSlide(1);
		//myMap();
	}
	// For all pages play the animation
	update();


}

/******************************************************************************/

/******************************************************************************/


