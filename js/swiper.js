//aboutセクションのスライダー
const swiperAbout = new Swiper('.about__swiper', {
  loop: true,
  slidesPerView: 1,
  speed: 2000,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  navigation: {
    prevEl: '.about__swiper-prev',
    nextEl: '.about__swiper-next',
  },
});

//instagramセクションのスライダー
const swiperInstagram = new Swiper('.instagram__swiper', {
  loop: true,
  slidesPerView: 6,
  speed: 6000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});