console.log(`Работа соответствует заданию полностью. Самооценка 125 баллов`);
let butn = document.querySelector('.header__burger');
let navn = document.querySelector('.header__nav');
let act = document.querySelector('._active');
let acc = document.querySelector('.account');
let pop = document.querySelector('.header__pop-up');
let log = document.querySelector('.header__button');
let wrap = document.querySelector('.wrapper');


if (butn) {
	butn.addEventListener("click", function (e) {
		navn.style.cssText = `right:0px; transition: right 2s 0s`;
		navn.classList.remove('_active');
	})
};
let clon = document.querySelector('.header__close');
if (clon) {
	clon.addEventListener("click", function (e) {
		navn.style.cssText = `right: -168px; transition: right 2s 0s`;
		navn.classList.add('_active');
	})
};
if (act) {
	act.addEventListener("click", function (e) {
		navn.style.cssText = `right: -168px; transition: right 2s 0s`;
	})
};

if (acc) {
	acc.addEventListener("click", function (e) {
		console.log('ссылка на аккуант');
		pop.classList.add('pop-active');
	}
	)
};

if (log) {
	log.addEventListener("click", function (e) {
		pop.classList.toggle('pop-active');
	}
	)
};

let butt = document.querySelector('.header__button');
document.addEventListener("click", function (e) {
	if ((e.target != butt) && (e.target != acc)) {
		// console.log(e.target);
		// console.log(pop.contains(e.target));
		if (!pop.contains(e.target)) {
			pop.classList.remove('pop-active');
		}
	}
}
);


let popSign = document.querySelector('.pop-up__button');
let form = document.querySelector('.pop-up__form');
if (popSign) {
	popSign.addEventListener("click", function (e) {
		alert(`Email: ${document.querySelector('.pop-up__email').value} \ password: ${document.querySelector('.pop-up__password').value}`);
		form.reset();
	})
}
let popt = document.querySelector('.pop-up__title');
let popn = document.querySelector('.pop-up__net');
let popo = document.querySelector('.pop-up__or');
let popf = document.querySelector('.pop-up__forgot');
let popr = document.querySelector('.pop-up__register');
let pops = document.querySelector('.pop-up__button');
let popb = document.querySelector('.pop-up__sign-up');

if (popr) {
	popr.addEventListener("click", function (e) {
		popt.style.cssText = `display:none;`;
		popn.style.cssText = `display:none;`;
		popo.style.cssText = `display:none;`;
		popf.style.cssText = `display:none;`;
		popr.style.cssText = `display:none;`;
		pops.style.cssText = `display:none;`;
		popb.style.cssText = `display:block;`;
		pop.style.cssText = `height:300px`;
	})
};

new Swiper('.image-slider',
	{
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		slidesPerView: 3,
		loop: true,
		spaceBetween: 30,
		centeredSlides: true,
		slideToClickedSlide: true,
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			481: {
				slidesPerView: 3,
				spaceBetween: 20,

			},
			768: {
				spaceBetween: 40,
			}
		},
	});