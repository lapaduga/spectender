"use strict"

document.addEventListener('DOMContentLoaded', function () {
	const headerButton = document.querySelector('.header__button');
	const body = document.body;
	const callback = document.querySelector('#callback');
	const close = document.querySelector('.popup__close');
	const popupArea = document.querySelector('.popup__area');
	const form = document.getElementById('form');
	const alert = document.querySelector('.popup__alert');
	const help = document.querySelector('.help__button');
	const propLinks = document.querySelectorAll('.property__link');
	const how = document.querySelector('.how__button');
	const scrollTop = document.querySelector('.scrolltop');
	const logo = document.querySelector('.header__logo');
	const thx = document.querySelector('#thanks');
	const closeThx = document.querySelector('.popup-thx__close');
	const popupAreaThx = document.querySelector('.popup-thx__area');

	//popup
	headerButton.onclick = function () {
		callback.classList.toggle('active');
		body.classList.toggle('lock');
	}
	close.onclick = function () {
		callback.classList.toggle('active');
		body.classList.toggle('lock');
	}
	popupArea.onclick = function () {
		callback.classList.toggle('active');
		body.classList.toggle('lock');
	}
	help.onclick = function () {
		callback.classList.toggle('active');
		body.classList.toggle('lock');
	}
	how.onclick = function () {
		callback.classList.toggle('active');
		body.classList.toggle('lock');
	}
	propLinks.forEach(function (propLink) {
		propLink.addEventListener('click', function (e) {
			callback.classList.toggle('active');
			body.classList.toggle('lock');
		})
	})
	
	//popup-thx
	logo.onclick = function () {
		thx.classList.toggle('active');
		body.classList.toggle('lock');
	}
	closeThx.onclick = function () {
		thx.classList.toggle('active');
		body.classList.toggle('lock');
	}
	popupAreaThx.onclick = function () {
		thx.classList.toggle('active');
		body.classList.toggle('lock');
	}

	//form behaviour
	form.addEventListener('submit', formSend);

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if (error === 0) {
			alert.classList.remove('active');
			form.reset();
		} else {
			alert.classList.add('active');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
		return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	//header height on scroll behaviour
	window.onscroll = function () { scrollFunction() };
	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			document.getElementById("header").style.backgroundColor = "#fff";
		} else {
			document.getElementById("header").style.backgroundColor = "transparent";
		}
		if (document.documentElement.clientWidth > 992) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header").style.paddingTop = "10px";
				document.getElementById("header").style.paddingBottom = "10px";
			} else {
				document.getElementById("header").style.paddingTop = "60px";
				document.getElementById("header").style.paddingBottom = "0px";
			}
		}
		if (document.documentElement.clientWidth < 993) {
			if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
				document.getElementById("header").style.paddingTop = "10px";
				document.getElementById("header").style.paddingBottom = "10px";
			}
		}

		if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
			scrollTop.classList.add('active');
		} else{
			scrollTop.classList.remove('active');
		}
	}

	$(scrollTop).click(function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	})

	//click on mouse teaser
	$("#mainscreen__scrolldown").click(function (event) {
		$('html, body').animate({ scrollTop: '+=500px' }, 800);
	});

	//examples slider
	$('.partners__slider').slick({
		arrows:false,
		dots: false,
		slidesToShow: 6,
		centerMode: false,
		variableWidth: false,
		responsive:[
			{
				breakpoint: 1366,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 3,
					centerMode: true,
					variableWidth: true
				}
			},
			{
				breakpoint: 361,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	//examples slider
	$('.slider').slick({
		dots: true,
		adaptiveHeight: true,
		infinite: false,
		centerMode: true,
		variableWidth: true,
		responsive:[
			{
				breakpoint:1366,
				settings:{
					centerMode: false,
					variableWidth: false
				}
			}
		]
	});
});