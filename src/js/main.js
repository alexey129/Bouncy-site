function HeadMenuf(){
	let element = document.querySelector("header > ul");
	element.classList.toggle("menuOpen");
	element.classList.toggle("menuClose");
	let element2 = document.querySelector("header");
	element2.classList.toggle("headerClose");
	element2.classList.toggle("headerOpen");
}
let headMenu = document.querySelector("header > .menu");
headMenu.onclick = HeadMenuf;

//меняет цвет у header
//код нужен полностью весь
var element = document.querySelector("header");
	var element2 = document.querySelectorAll("header > div");
if(window.pageYOffset >= 30){
		element.style.backgroundColor = "#D3D3D3";
		for(let elem of element2){
			elem.style.color = "black";
		}
	}

window.addEventListener("scroll", function(){
	var element = document.querySelector("header");
	var element2 = document.querySelectorAll("header > div");
	if(window.pageYOffset >= 30){
		element.style.backgroundColor = "#D3D3D3";
	} else {
		element.style.backgroundColor = "";
	}
})

//карусель our-services

function Slider(arg_slider_class, direction){
	let slider_class = arg_slider_class;
	let slider_wrapper;//"окошко" через которое видно слайды
	let current_item;//"текущий" слайд который видно в данный момент
	let slider_items;//блок со всеми слайдами, который двигается при нажатии кнопок
	let items_list;//массив со всеми слайдами
	let buttons = document.querySelectorAll(slider_class + " .buttons > *")

	function update_slider_wrapper(){
		slider_wrapper = document.querySelector(slider_class + " .slider_wrapper");
	};

	function update_current_item(){
		current_item = document.querySelector(slider_class + " .slider_wrapper .current_item");
	};

	function update_slider_items(){
		slider_items = document.querySelector(slider_class + " .slider_items");
	};

	function update_items_list(){
		items_list = document.querySelectorAll(slider_class + " .slider_items .slider_item");
	};

	update_slider_wrapper();
	update_current_item();
	update_slider_items();
	update_items_list();
	if(direction == "y"){
		slider_items.style.transform = "translateY(0px)";
	} else {
		slider_items.style.transform = "translateX(0px)";
	}
	let observer;
	if(direction == "y"){
		observer = new ResizeObserver(function(){
			slider_wrapper.style.height = getComputedStyle(current_item).height;
			slider_items.style.transform = "translateY(-"+current_item.offsetTop+"px)";
		});
	} else {
		observer = new ResizeObserver(function(){
			slider_wrapper.style.width = getComputedStyle(current_item).width;
			slider_items.style.transform = "translateX(-"+current_item.offsetLeft+"px)";
		});
	}
	observer.observe(current_item);

	for(let i = 0; i < buttons.length;i++){
		buttons[i].onclick = function(event){
			//меняем стиль текущего слайда на current_item
			for(let j = 0;j < items_list.length ;j++){
				if(j == i){
					items_list[j].className += " current_item";
					update_current_item();
				} else{
					items_list[j].className = items_list[j].className.replace( /(?:^|\s)current_item(?!\S)/g , '' );
				}
			}
			//меняем фон у нужной кнопки
			for(let k = 0; k < buttons.length;k++){
				if(k == i){
					buttons[k].style.backgroundColor = "#19BD9A";
				} else {
					buttons[k].style.backgroundColor = "#81868E";
				}
			}
			//перемещаем слайды и меняем размеры "окошка"
			if(direction == "y"){
				slider_items.style.transform = "translateY(-"+current_item.offsetTop+"px)";
				slider_wrapper.style.height = getComputedStyle(current_item).height;
			} else {
				slider_items.style.transform = "translateX(-"+current_item.offsetLeft+"px)";
				slider_wrapper.style.width = getComputedStyle(current_item).width;
			}
		}
	}
};
sliderOurServices = new Slider(".our-services .slider", "y");
//sliderTestimonials = new Slider(".testimonials .slider", "x");
//--------------------------------------------------------
//карусель details-about-bouncy
let swiperDetAbBoun = new Swiper('.details-about-bouncy .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoHeight: true,
  breakpoints:{
  	768:{height: 200},
  	440:{height: 270},
  	0:{height: 350},
  },
});

var buttonDetAbBoun1 = document.querySelector(".details-about-bouncy .buttons .button1");
var buttonDetAbBoun2 = document.querySelector(".details-about-bouncy .buttons .button2");
var buttonDetAbBoun3 = document.querySelector(".details-about-bouncy .buttons .button3");

buttonDetAbBoun1.onclick = function(event){
	swiperDetAbBoun.slideTo(1, 500)
	buttonDetAbBoun1.style.backgroundColor = "#19BD9A";
	buttonDetAbBoun2.style.backgroundColor = "#81868E";
	buttonDetAbBoun3.style.backgroundColor = "#81868E";
}
buttonDetAbBoun2.onclick = function(event){
	swiperDetAbBoun.slideTo(2, 500)
	buttonDetAbBoun1.style.backgroundColor = "#81868E";
	buttonDetAbBoun2.style.backgroundColor = "#19BD9A";
	buttonDetAbBoun3.style.backgroundColor = "#81868E";
}
buttonDetAbBoun3.onclick = function(event){
	swiperDetAbBoun.slideTo(3, 500)
	buttonDetAbBoun1.style.backgroundColor = "#81868E";
	buttonDetAbBoun2.style.backgroundColor = "#81868E";
	buttonDetAbBoun3.style.backgroundColor = "#19BD9A";
}

//---------------------------------------------------------------
//the-portfolio

var container = document.getElementById("gr");

imagesLoaded(container, function() {
	var msnry = new Masonry(".the-portfolio .grid",{
  // options
		itemSelector: '.the-portfolio .grid .grid-item',
		columnWidth: 300,
		isFitWidth: true,
	})
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

buttonTheTeam1.onclick = function(event){
	swiperTheTeam.slideTo(1, 500)
	buttonTheTeam1.style.backgroundColor = "#19BD9A";
	buttonTheTeam2.style.backgroundColor = "#81868E";
	buttonTheTeam3.style.backgroundColor = "#81868E";
}
buttonTheTeam2.onclick = function(event){
	swiperTheTeam.slideTo(2, 500)
	buttonTheTeam1.style.backgroundColor = "#81868E";
	buttonTheTeam2.style.backgroundColor = "#19BD9A";
	buttonTheTeam3.style.backgroundColor = "#81868E";
}
buttonTheTeam3.onclick = function(event){
	swiperTheTeam.slideTo(3, 500)
	buttonTheTeam1.style.backgroundColor = "#81868E";
	buttonTheTeam2.style.backgroundColor = "#81868E";
	buttonTheTeam3.style.backgroundColor = "#19BD9A";
}

//карусель testimonials

let swiperTestimonials = new Swiper('.testimonials .comments .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoHeight: true,
  breakpoints:{
  	640:{height: 200},
  	0:{height: 300},
  },
});

var buttonTestimonials1 = document.querySelector(".testimonials .comments .buttons .button1");
var buttonTestimonials2 = document.querySelector(".testimonials .comments .buttons .button2");
var buttonTestimonials3 = document.querySelector(".testimonials .comments .buttons .button3");

buttonTestimonials1.onclick = function(event){
	swiperTestimonials.slideTo(1, 500)
	buttonTestimonials1.style.backgroundColor = "#19BD9A";
	buttonTestimonials2.style.backgroundColor = "#81868E";
	buttonTestimonials3.style.backgroundColor = "#81868E";
}
buttonTestimonials2.onclick = function(event){
	swiperTestimonials.slideTo(2, 500)
	buttonTestimonials1.style.backgroundColor = "#81868E";
	buttonTestimonials2.style.backgroundColor = "#19BD9A";
	buttonTestimonials3.style.backgroundColor = "#81868E";
}
buttonTestimonials3.onclick = function(event){
	swiperTestimonials.slideTo(3, 500)
	buttonTestimonials1.style.backgroundColor = "#81868E";
	buttonTestimonials2.style.backgroundColor = "#81868E";
	buttonTestimonials3.style.backgroundColor = "#19BD9A";
}


//карусель latest-news

let swiperLatestNews = new Swiper('.latest-news .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoHeight: true,
  breakpoints:{
  	785:{height: 325},
  	0:{height: 430},
  },
});

var buttonLatestNews1 = document.querySelector(".latest-news .buttons .button1");
var buttonLatestNews2 = document.querySelector(".latest-news .buttons .button2");
var buttonLatestNews3 = document.querySelector(".latest-news .buttons .button3");

buttonLatestNews1.onclick = function(event){
	swiperLatestNews.slideTo(1, 500)
	buttonLatestNews1.style.backgroundColor = "#B2B3B3";
	buttonLatestNews2.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews3.style.backgroundColor = "rgba(0, 0, 0, 0)";
}
buttonLatestNews2.onclick = function(event){
	swiperLatestNews.slideTo(2, 500)
	buttonLatestNews1.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews2.style.backgroundColor = "#B2B3B3";
	buttonLatestNews3.style.backgroundColor = "rgba(0, 0, 0, 0)";
}
buttonLatestNews3.onclick = function(event){
	swiperLatestNews.slideTo(3, 500)
	buttonLatestNews1.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews2.style.backgroundColor = "rgba(0, 0, 0, 0)";
	buttonLatestNews3.style.backgroundColor = "#B2B3B3";
}

//find-us-on-the-map
let buttonMap = document.querySelector(".find-us-on-the-map > .start_back > .enter");
let enterMap = document.querySelector(".find-us-on-the-map > .start_back");
let mapMap = document.querySelector(".find-us-on-the-map > .map");

buttonMap.onclick = function(event){
	enterMap.style.display = "none";
	mapMap.style.display = "block";
}