// [ILLUM 1 IMAGE ON SCROLL]
const uniqueImage = document.querySelector('.unique_example_img');
window.addEventListener('scroll', () => {
  let x = uniqueImage.getBoundingClientRect().top;
  if (x <= 500 && x >= -500) {
    uniqueImage.classList.add('active_illum');
  } else {
    uniqueImage.classList.remove('active_illum');
  }
})

const teamSec = document.querySelector('#team');
const bot = document.querySelector('.bot')
window.addEventListener('scroll', () => {
  let x = teamSec.getBoundingClientRect().top;
  if (x <= 500 && x >= -500) {
    bot.classList.add('active-bot');
  } else {
    bot.classList.remove('active-bot');
  }
})


// [SLIDER]
var slider = tns({
  container: '.slider-actor',
  slideBy: 1,
  items: 2,
  gutter: 10,
  speed: 500,
  center: true,
  autoplay: false,
  navAsThumbnails: true,
  controls: false,
  navContainer: '.slider-actor-pagination',
  "responsive": {
    "700": {
      "items": 3,
      gutter: 20,
    },
    "1100": {
      "items": 4,
      gutter: 20,
    },

  },
});

slider.events.on("transitionStart", function (info) {
  info.slideItems[info.indexCached].classList.remove(
    "active-slide"
  );

  info.slideItems[info.index].classList.add(
    "active-slide"
  );
});



// [FIXED SIDEBAR]
const sidebar = document.querySelector('#roadmap');
const fixedItem = document.querySelector('#helmet');

window.addEventListener('scroll', () => {
  let x = sidebar.getBoundingClientRect();
  let y = x.top;
  let z = x.height;
  if (y <= 0) {
    fixedItem.style.transform = `translateY(${-y}px)`
  }
  if (-(y - 300) >= z) {
    fixedItem.style.transform = `translateY(${z-300}px)`
  }
  if (y <= -200 && -(y - 600) <= z) {
    fixedItem.classList.add('active-illum');
  } else {
    fixedItem.classList.remove('active-illum');
  }
})



// [PLAY VIDEO]
var video = document.querySelectorAll('video');
video.forEach(el => {
  el.muted = true;
  el.loop = true;
  el.play();
  el.controls = false;
})