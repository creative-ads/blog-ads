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

// Slider Gambar
let indexImageSlide = 0;

function changeImageSlide(direction) {
  const imageSlides = document.querySelectorAll("#image-slider .slide");

  // Hapus class 'active' dari slide saat ini
  imageSlides[indexImageSlide].classList.remove("active");

  // Hitung indeks slide berikutnya atau sebelumnya
  indexImageSlide =
    (indexImageSlide + direction + imageSlides.length) % imageSlides.length;

  // Tambahkan class 'active' ke slide baru
  imageSlides[indexImageSlide].classList.add("active");
}

// Slider Video
let indexVideoSlide = 0;

function changeVideoSlide(direction) {
  const videoSlides = document.querySelectorAll("#video-slider .svid");

  // Hapus class 'active' dari slide saat ini
  videoSlides[indexVideoSlide].classList.remove("active");

  // Hitung indeks slide berikutnya atau sebelumnya
  indexVideoSlide =
    (indexVideoSlide + direction + videoSlides.length) % videoSlides.length;

  // Tambahkan class 'active' ke slide baru
  videoSlides[indexVideoSlide].classList.add("active");
}


window.onscroll = function() {
  const button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
