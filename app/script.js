$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  nav: false,
  responsive: {
    0: {
      items: 1,
      dots: true,
    },
    600: {
      items: 3,
      dots: true,
    },
    1000: {
      items: 5,
      dots: true,
    },
  },
});
