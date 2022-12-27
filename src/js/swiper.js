const slider = document.querySelector('.swiper')
const slider1 = document.querySelector('.swiper-2')

let swiper = new Swiper(slider, {
   
    // Optional parameters
    direction: 'horizontal',
    loop: true,
   
    // If we need pagination
    pagination: {
        el: '.pag-1',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
   //  scrollbar: {
   //    el: '.swiper-scrollbar',
   //  },
  });

  let swiper1 = new Swiper(slider1, {
   
    // Optional parameters
    direction: 'horizontal',
    loop: true,
   
    // If we need pagination
    pagination: {
        el: '.pag-2',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-2-button-next',
      prevEl: '.swiper-2-button-prev',
    },
  
    // And if we need scrollbar
   //  scrollbar: {
   //    el: '.swiper-scrollbar',
   //  },
  });