var swiper = new Swiper('.swiper', {
  slidesPerView: 1, // Default: 1 slide jika tidak ada breakpoint yang memenuhi
  spaceBetween: 30, // Jarak antar slide
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, // 1 slide di layar kecil
    },
    768: {
      slidesPerView: 2, // 2 slide di layar medium
    },
    1024: {
      slidesPerView: 3, // 3 slide di layar besar
    }
  }
   // And if we need scrollbar

});

  const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik diluar sidebar diluar

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});