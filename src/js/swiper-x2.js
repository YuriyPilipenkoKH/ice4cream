var swiper = new Swiper('.swiper-big-gallery', { 
    speed: 600, 
    allowTouchMove: false, 
    loop: false, 
  }); 
 
	// main slides - navigation 
  var swiper2 = new Swiper('.swiper-small-gallery', { 
    speed: 600, 
    loop: false, 
    slidesPerView: 4, 
    shortSwipes: false, 
    spaceBetween: 4, 
    breakpoints: { 
    	480: { 
        slidesPerView: 2, 
      }, 
    	650: { 
        slidesPerView: 3, 
      }, 
    	800: { 
        slidesPerView: 4, 
      }, 
    }, 
  }); 
 
  // for active Year 
  var activeYear; 
 
  // switch top slides when clicked to bottom time line element 
  $('.swiper-small-gallery .swiper-slide').on('click', function() {  
  	$('.swiper-small-gallery .swiper-slide').removeClass('sm-active-slide'); 
  	$(this).addClass('sm-active-slide'); 
 
  	var navIndex = $(this).index(); 
 
	  swiper.slideTo(navIndex); // slide main slides to current nav item 
	  swiper2.slideTo(navIndex); // slide nav item to current nav item 
     
	});