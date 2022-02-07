import 'normalize.css';
import '../scss/styles.scss'
import 'animate.css';
const pug = require("pug");

// * JQuery
import  jquery from 'jquery';
export default (window.$ = window.jQuery = jquery);
// * Owl Carousel
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;


$(function(){

	// ! Menu
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if (scroll > 0){
			$('.header').addClass('bg-white');
		} else if (scroll <= 1 ){
			$('.header').removeClass('bg-white');
		}
	});

	$('.hamburger').on('click',function (e) { 
		e.preventDefault();
		$('.nav').toggleClass('active');
	});

	const iconNext = '<i class="icon-chevron-thin-left"></i>';
	const iconPrev = '<i class="icon-chevron-thin-right"></i>';
	// * Carouse
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
		nav: true,
		dots: true,
        autoplayTimeout: 3000,
		navText: [iconPrev, iconNext],
        animateOut: 'animate__fadeOut',
        animateIn: 'animate__fadeIn',
        smartSpeed:450,
        responsive: {
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
				
            }
        }
    });

});


