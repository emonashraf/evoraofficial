// swipper
const topNavswiper = new Swiper('.top-nav-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var sliderThumbnail = new Swiper('.slider-thumbnail', {
  slidesPerView: 5,
  freeMode: true,
  spaceBetween: 16,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var slider = new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});

//slicer col-3
var chooseDealSwiper = new Swiper('.choose-deal-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    420: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1330: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
//  video blog slider
var videoBlogSwiper = new Swiper('.video-blog-swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1330: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// JavaScript to toggle accordion sections
const accSingleTriggers = document.querySelectorAll('.accordion-header');

accSingleTriggers.forEach((trigger) => trigger.addEventListener('click', toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle('open');
      return;
    }
    item.classList.remove('open');
  });
}
