function HeadMenuf() {
	let element = document.querySelector("header > ul");
	element.classList.toggle("menuOpen");
	element.classList.toggle("menuClose");
	let element2 = document.querySelector("header");
	element2.classList.toggle("headerClose");
	element2.classList.toggle("headerOpen");
}
let headMenu = document.querySelector("header .menu");
headMenu.onclick = HeadMenuf;



//меняет цвет у header
//код нужен полностью весь
var element = document.querySelector("header");
var element2 = document.querySelectorAll("header > div");
if (window.pageYOffset >= 30) {
	element.style.backgroundColor = "#D3D3D3";
	for (let elem of element2) {
	   elem.style.color = "black";
	}
}

window.addEventListener("scroll", function() {
	var element = document.querySelector("header");
	//var element2 = document.querySelectorAll("header > div");
	if (window.pageYOffset >= 30) {
	   element.style.backgroundColor = "#D3D3D3";
	} else {
	   element.style.backgroundColor = "";
	}
});

//скрытие кнопки "пролистать вниз"
if(document.documentElement.clientHeight < 500){
	let elementpick = document.querySelector(".hello .pick");
	elementpick.style.display = "none";
}
//карусель our-services

var buttonOurServices1 = document.querySelector(".our-services .slider .buttons .button1");
var buttonOurServices2 = document.querySelector(".our-services .slider .buttons .button2");
var buttonOurServices3 = document.querySelector(".our-services .slider .buttons .button3");
var buttonOurServices4 = document.querySelector(".our-services .slider .buttons .button4");

let swiperOurServices = new Swiper('.our-services .slider .swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	breakpoints: {
		786: {
			height: 300
		},
		440: {
			height: 320
		},
		0: {
			height: 350
		},
	},
});

swiperOurServices.on("slideChange",function(){
	if(swiperOurServices.activeIndex == 1 || swiperOurServices.activeIndex == 5){
		buttonOurServices1.style.backgroundColor = "#19BD9A";
		buttonOurServices2.style.backgroundColor = "#81868E";
		buttonOurServices3.style.backgroundColor = "#81868E";
		buttonOurServices4.style.backgroundColor = "#81868E";
	};
	if(swiperOurServices.activeIndex == 2){
		buttonOurServices1.style.backgroundColor = "#81868E";
		buttonOurServices2.style.backgroundColor = "#19BD9A";
		buttonOurServices3.style.backgroundColor = "#81868E";
		buttonOurServices4.style.backgroundColor = "#81868E";
	};
	if(swiperOurServices.activeIndex == 3){
		buttonOurServices1.style.backgroundColor = "#81868E";
		buttonOurServices2.style.backgroundColor = "#81868E";
		buttonOurServices3.style.backgroundColor = "#19BD9A";
		buttonOurServices4.style.backgroundColor = "#81868E";
	};
	if(swiperOurServices.activeIndex == 4 || swiperOurServices.activeIndex == 0){
		buttonOurServices1.style.backgroundColor = "#81868E";
		buttonOurServices2.style.backgroundColor = "#81868E";
		buttonOurServices3.style.backgroundColor = "#81868E";
		buttonOurServices4.style.backgroundColor = "#19BD9A";
	};
});

buttonOurServices1.onclick = function(event) {
	swiperOurServices.slideTo(1, 500);
	buttonOurServices1.style.backgroundColor = "#19BD9A";
	buttonOurServices2.style.backgroundColor = "#81868E";
	buttonOurServices3.style.backgroundColor = "#81868E";
	buttonOurServices4.style.backgroundColor = "#81868E";
};
buttonOurServices2.onclick = function(event) {
	swiperOurServices.slideTo(2, 500);
	buttonOurServices1.style.backgroundColor = "#81868E";
	buttonOurServices2.style.backgroundColor = "#19BD9A";
	buttonOurServices3.style.backgroundColor = "#81868E";
	buttonOurServices4.style.backgroundColor = "#81868E";
};
buttonOurServices3.onclick = function(event) {
	swiperOurServices.slideTo(3, 500);
	buttonOurServices1.style.backgroundColor = "#81868E";
	buttonOurServices2.style.backgroundColor = "#81868E";
	buttonOurServices3.style.backgroundColor = "#19BD9A";
	buttonOurServices4.style.backgroundColor = "#81868E";
};
buttonOurServices4.onclick = function(event) {
	   swiperOurServices.slideTo(4, 500);
	   buttonOurServices1.style.backgroundColor = "#81868E";
	   buttonOurServices2.style.backgroundColor = "#81868E";
	   buttonOurServices3.style.backgroundColor = "#81868E";
	   buttonOurServices4.style.backgroundColor = "#19BD9A";
	};
	//--------------------------------------------------------
	//карусель details-about-bouncy
let swiperDetAbBoun = new Swiper('.details-about-bouncy .swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	breakpoints: {
	   768: {
		  height: 200
	   },
	   440: {
		  height: 270
	   },
	   0: {
		  height: 350
	   },
	},
});

var buttonDetAbBoun1 = document.querySelector(".details-about-bouncy .details-about-bouncy__buttons .button1");
var buttonDetAbBoun2 = document.querySelector(".details-about-bouncy .details-about-bouncy__buttons .button2");
var buttonDetAbBoun3 = document.querySelector(".details-about-bouncy .details-about-bouncy__buttons .button3");

swiperDetAbBoun.on("slideChange",function(){
	if(swiperDetAbBoun.activeIndex == 1 || swiperDetAbBoun.activeIndex == 4){
		buttonDetAbBoun1.style.backgroundColor = "#19BD9A";
		buttonDetAbBoun2.style.backgroundColor = "#81868E";
		buttonDetAbBoun3.style.backgroundColor = "#81868E";
	};
	if(swiperDetAbBoun.activeIndex == 2){
		buttonDetAbBoun1.style.backgroundColor = "#81868E";
		buttonDetAbBoun2.style.backgroundColor = "#19BD9A";
		buttonDetAbBoun3.style.backgroundColor = "#81868E";
	};
	if(swiperDetAbBoun.activeIndex == 3 || swiperDetAbBoun.activeIndex == 0){
		buttonDetAbBoun1.style.backgroundColor = "#81868E";
		buttonDetAbBoun2.style.backgroundColor = "#81868E";
		buttonDetAbBoun3.style.backgroundColor = "#19BD9A";
	};
});

buttonDetAbBoun1.onclick = function(event) {
	swiperDetAbBoun.slideTo(1, 500);
	buttonDetAbBoun1.style.backgroundColor = "#19BD9A";
	buttonDetAbBoun2.style.backgroundColor = "#81868E";
	buttonDetAbBoun3.style.backgroundColor = "#81868E";
};
buttonDetAbBoun2.onclick = function(event) {
	swiperDetAbBoun.slideTo(2, 500);
	buttonDetAbBoun1.style.backgroundColor = "#81868E";
	buttonDetAbBoun2.style.backgroundColor = "#19BD9A";
	buttonDetAbBoun3.style.backgroundColor = "#81868E";
};
buttonDetAbBoun3.onclick = function(event) {
	swiperDetAbBoun.slideTo(3, 500);
	buttonDetAbBoun1.style.backgroundColor = "#81868E";
	buttonDetAbBoun2.style.backgroundColor = "#81868E";
	buttonDetAbBoun3.style.backgroundColor = "#19BD9A";
};

//---------------------------------------------------------------
//the-portfolio

var container = document.getElementById("gr");

imagesLoaded(container, function() {
	var msnry = new Masonry(".the-portfolio .grid", {
	   // options
	   itemSelector: '.the-portfolio .grid .grid-item',
	   columnWidth: 300,
	   isFitWidth: true,
	});
});

//---------------------------------------------------------------
//карусель the-team

let swiperTheTeam = new Swiper('.the-team .swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	height: 400,
	/*breakpoints:{
	640:{height: 400},
	0:{height: 300},
	},*/
});

var buttonTheTeam1 = document.querySelector(".the-team .buttons .button1");
var buttonTheTeam2 = document.querySelector(".the-team .buttons .button2");
var buttonTheTeam3 = document.querySelector(".the-team .buttons .button3");

swiperTheTeam.on("slideChange",function(){
	if(swiperTheTeam.activeIndex == 1 || swiperTheTeam.activeIndex == 4){
		buttonTheTeam1.style.backgroundColor = "#19BD9A";
		buttonTheTeam2.style.backgroundColor = "white";
		buttonTheTeam3.style.backgroundColor = "white";
	};
	if(swiperTheTeam.activeIndex == 2){
		buttonTheTeam1.style.backgroundColor = "white";
		buttonTheTeam2.style.backgroundColor = "#19BD9A";
		buttonTheTeam3.style.backgroundColor = "white";
	};
	if(swiperTheTeam.activeIndex == 3 || swiperTheTeam.activeIndex == 0){
		buttonTheTeam1.style.backgroundColor = "white";
		buttonTheTeam2.style.backgroundColor = "white";
		buttonTheTeam3.style.backgroundColor = "#19BD9A";
	};
});

buttonTheTeam1.onclick = function(event) {
	swiperTheTeam.slideTo(1, 500);
	buttonTheTeam1.style.backgroundColor = "#19BD9A";
	buttonTheTeam2.style.backgroundColor = "white";
	buttonTheTeam3.style.backgroundColor = "white";
};
buttonTheTeam2.onclick = function(event) {
	swiperTheTeam.slideTo(2, 500);
	buttonTheTeam1.style.backgroundColor = "white";
	buttonTheTeam2.style.backgroundColor = "#19BD9A";
	buttonTheTeam3.style.backgroundColor = "white";
};
buttonTheTeam3.onclick = function(event) {
	swiperTheTeam.slideTo(3, 500);
	buttonTheTeam1.style.backgroundColor = "white";
	buttonTheTeam2.style.backgroundColor = "white";
	buttonTheTeam3.style.backgroundColor = "#19BD9A";
};

//карусель testimonials

let swiperTestimonials = new Swiper('.testimonials .comments .swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	breakpoints: {
	   640: {
		  height: 200
	   },
	   0: {
		  height: 300
	   },
	},
});

var buttonTestimonials1 = document.querySelector(".testimonials .comments .buttons .button1");
var buttonTestimonials2 = document.querySelector(".testimonials .comments .buttons .button2");
var buttonTestimonials3 = document.querySelector(".testimonials .comments .buttons .button3");

swiperTestimonials.on("slideChange",function(){
	if(swiperTestimonials.activeIndex == 1 || swiperTestimonials.activeIndex == 4){
		buttonTestimonials1.style.backgroundColor = "#19BD9A";
		buttonTestimonials2.style.backgroundColor = "white";
		buttonTestimonials3.style.backgroundColor = "white";
	};
	if(swiperTestimonials.activeIndex == 2){
		buttonTestimonials1.style.backgroundColor = "white";
		buttonTestimonials2.style.backgroundColor = "#19BD9A";
		buttonTestimonials3.style.backgroundColor = "white";
	};
	if(swiperTestimonials.activeIndex == 3 || swiperTestimonials.activeIndex == 0){
		buttonTestimonials1.style.backgroundColor = "white";
		buttonTestimonials2.style.backgroundColor = "white";
		buttonTestimonials3.style.backgroundColor = "#19BD9A";
	};
});

buttonTestimonials1.onclick = function(event) {
	swiperTestimonials.slideTo(1, 500);
	buttonTestimonials1.style.backgroundColor = "#19BD9A";
	buttonTestimonials2.style.backgroundColor = "white";
	buttonTestimonials3.style.backgroundColor = "white";
};
buttonTestimonials2.onclick = function(event) {
	swiperTestimonials.slideTo(2, 500);
	buttonTestimonials1.style.backgroundColor = "white";
	buttonTestimonials2.style.backgroundColor = "#19BD9A";
	buttonTestimonials3.style.backgroundColor = "white";
};
buttonTestimonials3.onclick = function(event) {
	swiperTestimonials.slideTo(3, 500);
	buttonTestimonials1.style.backgroundColor = "white";
	buttonTestimonials2.style.backgroundColor = "white";
	buttonTestimonials3.style.backgroundColor = "#19BD9A";
};


//карусель latest-news

let swiperLatestNews = new Swiper('.latest-news .swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	breakpoints: {
	   785: {
		  height: 325
	   },
	   0: {
		  height: 430
	   },
	},
});

var buttonLatestNews1 = document.querySelector(".latest-news .buttons .button1");
var buttonLatestNews2 = document.querySelector(".latest-news .buttons .button2");
var buttonLatestNews3 = document.querySelector(".latest-news .buttons .button3");

swiperLatestNews.on("slideChange",function(){
	if(swiperLatestNews.activeIndex == 1 || swiperLatestNews.activeIndex == 4){
		buttonLatestNews1.style.backgroundColor = "#B2B3B3";
		buttonLatestNews2.style.backgroundColor = "rgba(0, 0, 0, 0)";
		buttonLatestNews3.style.backgroundColor = "rgba(0, 0, 0, 0)";
	};
	if(swiperLatestNews.activeIndex == 2){
		buttonLatestNews1.style.backgroundColor = "rgba(0, 0, 0, 0)";
		buttonLatestNews2.style.backgroundColor = "#B2B3B3";
		buttonLatestNews3.style.backgroundColor = "rgba(0, 0, 0, 0)";
	};
	if(swiperLatestNews.activeIndex == 3 || swiperLatestNews.activeIndex == 0){
		buttonLatestNews1.style.backgroundColor = "rgba(0, 0, 0, 0)";
		buttonLatestNews2.style.backgroundColor = "rgba(0, 0, 0, 0)";
		buttonLatestNews3.style.backgroundColor = "#B2B3B3";
	};
});

buttonLatestNews1.onclick = function(event) {
	swiperLatestNews.slideTo(1, 500);
	buttonLatestNews1.style.backgroundColor = "#B2B3B3";
	buttonLatestNews2.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews3.style.backgroundColor = "rgba(0, 0, 0, 0)";
};
buttonLatestNews2.onclick = function(event) {
	swiperLatestNews.slideTo(2, 500);
	buttonLatestNews1.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews2.style.backgroundColor = "#B2B3B3";
	buttonLatestNews3.style.backgroundColor = "rgba(0, 0, 0, 0)";
};
buttonLatestNews3.onclick = function(event) {
	swiperLatestNews.slideTo(3, 500);
	buttonLatestNews1.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews2.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews3.style.backgroundColor = "#B2B3B3";
};

//find-us-on-the-map
let buttonMap = document.querySelector(".find-us-on-the-map > .start_back > .enter");
let enterMap = document.querySelector(".find-us-on-the-map > .start_back");
let mapMap = document.querySelector(".find-us-on-the-map > .map");

buttonMap.onclick = function(event) {
	enterMap.style.display = "none";
	mapMap.style.display = "block";
};