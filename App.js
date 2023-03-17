const header = document.querySelector("header");
const button = document.querySelector(".hamburger");
const body = document.querySelector("body");
const mobileMenu = document.querySelector('.hide_mobile_menu')
const close = document.querySelector(".close");
const open = document.querySelector(".open");

const title = document.querySelector(".header_title");
button.addEventListener("click", () => {
  if (title.style.display == "none") {
    title.style.display = "block";
    header.classList.remove("black_header");
    body.style.overflow = "scroll";
    close.style.display = "none";
    open.style.display = 'block'
    mobileMenu.style.display = 'none'
  } else {
    title.style.display = "none";
    header.classList.add("black_header");
    body.style.overflow = "hidden";
    close.style.display = "block";
    open.style.display = 'none'
    mobileMenu.style.display = 'block'
  }
});

close.addEventListener("click", () => {
    if (title.style.display == "none") {
      title.style.display = "block";
      header.classList.remove("black_header");
      body.style.overflow = "scroll";
      close.style.display = "none";
      open.style.display = 'block'
      mobileMenu.style.display = 'none'

    } else {
      title.style.display = "none";
      header.classList.add("black_header");
      body.style.overflow = "hidden";
      close.style.display = "block";
      open.style.display = 'none'
      mobileMenu.style.display = 'block'

    }
  });
