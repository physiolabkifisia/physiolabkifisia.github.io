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
}

// Next/previous controls
function plusSlides(n) {
	if (!slides || !dots) {
		return;
	};
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	if (!slides || !dots) {
		setTimeout(showSlides(1), 1000);
		return;
	};
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

var dt = 5;
var gravity = 9.8;
var ball;
var speed = 0;
var curtop = 200;

function moveBall(val) {
	//alert("top=" + ball.style.top + "  val="+val);
	curtop += val/4;
	ball.style.top = curtop + "px";
}

function update () {

	if (!ball) {
		ball = document.getElementById("ball");
		setTimeout(update, 1000);
		return;
	};
	
	/*
	if (curtop > 500) {
		//alert(speed);
		speed = speed * -1;
	} else if (curtop < 200) {
		curtop = 200;
		speed = 0;
	}
	*/
	
	if (curtop > 500 && Math.abs(speed) < 0.4) {
		//alert("why speed="+speed);
		curtop = 500;
		speed = 0;
		return;
	}
	
	if (curtop >= 500) {
		//alert(speed);
		speed = speed - 0.2;
		speed = speed * -1;
	} else {
		speed += gravity * dt / 1000;
	}
	
	moveBall(speed);
	setTimeout(update, dt);
	
}

function load_page () {
	var path = window.location.pathname;
	var page = path.split("/").pop();
	//alert( page );
	
	if (page=="index.html") {
		currentSlide(1);
		//myMap();
	}
	// For all pages play the animation
	update();


}


/******************************************************************************/


