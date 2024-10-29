// swipper
const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//

var sliderThumbnail = new Swiper(".slider-thumbnail", {
  slidesPerView: 5,
  freeMode: true,
  spaceBetween: 16,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var slider = new Swiper(".slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: sliderThumbnail,
  },
});

//

// JavaScript to toggle accordion sections
const accSingleTriggers = document.querySelectorAll(".accordion-header");

accSingleTriggers.forEach((trigger) => trigger.addEventListener("click", toggleAccordion));

function toggleAccordion() {
  const items = document.querySelectorAll(".accordion-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("open");
      return;
    }
    item.classList.remove("open");
  });
}
