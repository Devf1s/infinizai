import * as flsFunctions from "./modules/functions.js";
import "./slick.min.js";
import "./vanilla-tilt.min.js";

flsFunctions.isWebp();

$(function() {
	//* --- Animation --- *//
	AOS.init({
		offset: 120,
		once: false,
	});

	$(window).scroll(function() {
		$('.animate__left').each(function() {
			let imagePos = $(this).offset().top;

			let topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 900) {
				$(this).addClass('animate__animated animate__slideInLeft');
			}
		});
	});
	$(window).scroll(function() {
		$('.animate__right').each(function() {
			let imagePos = $(this).offset().top;

			let topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 900) {
				$(this).addClass('animate__animated animate__slideInRight');
			}
		});
	});

	if (document.body.clientWidth < 1200) {
		const blocks = document.querySelectorAll('.features__item');
		blocks.forEach((block) => {
			if (block.classList.contains('animate__right')) {
				block.classList.remove('animate__right');
			} else {
				block.classList.remove('animate__left');
			}
		});

		const news = document.querySelector('.news');
		const containerNews = news.querySelector('.container');
		containerNews.removeAttribute("data-aos");
	}

	//* --- Slider --- *//
	$('.slider').slick({
        slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1
				}
			},
			{
				breakpoint: 991,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
    });

	//* --- Vanilla tilt --- *//
	const cards = document.querySelectorAll('.features__wrapper');
	VanillaTilt.init(cards);
	// VanillaTilt.init(cards), {
	// 	max: 25,
	// 	speed: 400,
	// 	transition: true,
	// };

	//* --- Burger --- *//
	const burger = document.querySelector('.header__burger');
	const burgerMenu = document.querySelector('.nav');
	const burgerList = [burger, burgerMenu];
	burger.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		})
	});
});