AOS.init({
  duration: 1000,
});
// Обратный отсчёт
function dateCounter() {
  //HTML
  let days = document.querySelector(".days");
  let hours = document.querySelector(".hours");
  let minutes = document.querySelector(".minutes");
  let seconds = document.querySelector(".seconds");

  // Делаю расчеты
  let nextDate = new Date(`Jan 07 ${new Date().getFullYear()} 18:00:00`);

  let today = new Date();
  let diff = nextDate - today;

  // Перевод в дни
  let daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  // Перевод в часов
  let hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  // Перевод в минут
  let minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  // Перевод в секунд
  let secondsLeft = Math.floor(diff / 1000) % 60;

  // Меняю значения через innerHTML
  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft;
  minutes.innerHTML = minutesLeft;
  seconds.innerHTML = secondsLeft;
}
// Запускаю расчет каждую секунду через setInterval
setInterval(dateCounter);

// Меняется сумма при ползунке //
function rangeMoney() {
  let range1 = document.querySelector(".range-1");
  let money = document.querySelector(".got-money");
  money.innerHTML = +range1.value * 1000 + "₽";
}
setInterval(rangeMoney);

// Fast-start animation
let start_height = 1300;
function findHeight() {
  let scroll_height = window.pageYOffset;
  let anim_items = document.querySelectorAll(".per-out");
  for (let item of anim_items) {
    for (let item2 of item.children) {
      if (scroll_height >= start_height) {
        item2.classList.remove("hide");
      }
    }
  }
}
setInterval(findHeight);

// Drag and Drop (by Hasan)

let block_img = document.querySelectorAll(".drag-item");

let funct = function () {
  let item_of_this;
  let drag;
  function dr_st() {
    drag = this;
    item_of_this = drag.children;
    this.classList.add("scale");
  }
  function dr_ent() {}

  function dr_ov(event) {
    event.preventDefault();
    this.classList.add("scale");
  }

  function dr_lv() {
    this.classList.remove("scale");
  }

  function dr_end() {
    this.classList.remove("scale");
  }

  function dr_op() {
    for (let item of item_of_this) {
      this.append(item);
    }

    let item_of_item = this.children;

    for (let item of item_of_item) {
      drag.append(item);
    }
  }

  for (let item of block_img) {
    item.addEventListener("dragstart", dr_st);
    item.addEventListener("dragenter", dr_ent);
    item.addEventListener("dragover", dr_ov);
    item.addEventListener("dragleave", dr_lv);
    item.addEventListener("dragend", dr_end);
    item.addEventListener("drop", dr_op);
  }
};

funct();

// Biography Cristiano Ronaldo
document.querySelectorAll(".bio-btn")[1].addEventListener("click", function () {
  window.open(
    "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D1%88%D1%82%D0%B8%D0%B0%D0%BD%D1%83_%D0%A0%D0%BE%D0%BD%D0%B0%D0%BB%D0%B4%D1%83"
  );
});
document.querySelectorAll(".bio-btn")[4].addEventListener("click", function () {
  window.open(
    "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D1%88%D1%82%D0%B8%D0%B0%D0%BD%D1%83_%D0%A0%D0%BE%D0%BD%D0%B0%D0%BB%D0%B4%D1%83"
  );
});

// Figma open on last link
document.querySelector(".last-link").addEventListener("click", function () {
  window.open(
    "https://www.figma.com/file/ShKB1fVmuBKPPmQSK7PCqd/%D0%BF%D0%B5%D1%80%D0%B2%D1%8B%D0%B9-%D0%BA%D1%83%D1%80%D1%81-%2B?node-id=0%3A1&t=N5U3O7gCLWNAtsZS-0"
  );
});

// Modal window
let body = document.body;
let main_btn = document.querySelector(".main-btn");
let form_box = document.querySelector(".form-box");
let form_btn = document.querySelector(".form-btn");
let form2_box = document.querySelector(".form-2-box");
let header_btn = document.querySelector(".header-btn");

main_btn.addEventListener("click", function () {
  form_box.classList.toggle("hide");
  body.classList.add("lock");
});
header_btn.addEventListener("click", function () {
  form_box.classList.toggle("hide");
  body.classList.add("lock");
});
form_btn.addEventListener("click", function () {
  form_box.classList.toggle("hide");
  form2_box.classList.toggle("hide");
  body.classList.add("lock");
});
form2_box.addEventListener("click", function () {
  form2_box.classList.toggle("hide");
  body.classList.toggle("lock");
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    form_box.classList.add("hide");
    form2_box.classList.add("hide");
    body.classList.remove("lock");
  }
  if (event.code == "KeyO" && event.altKey) {
    form_box.classList.remove("hide");
    form2_box.classList.add("hide");
    body.classList.add("lock");
  }
});

// Swiper js
const mySwiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const mySwiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Адаптация для js
let body_width = document.body.clientWidth;
if (body_width <= 1600) {
  start_height = 1500;
}
if (body_width <= 1300) {
  start_height = 1600;
}

// scroll bar

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

// light or dark mode

let mode = document.querySelector(".button_dark_or_sun_mode");

let switchh = document.querySelector(".block_switch");

mode.onclick = () => {
  mode.classList.toggle("color_mode");
  switchh.classList.toggle("right");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == "./CSS/") {
    theme.href = "./CSS/dark.css";
  } else {
    theme.href = "./CSS/";
  }
};

document.addEventListener("keydown", function (event) {
  if (event.code == "KeyN" && event.shiftKey) {
    mode.classList.toggle("color_mode");
    switchh.classList.toggle("right");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "./CSS/") {
      theme.href = "./CSS/dark.css";
    } else {
      theme.href = "./CSS/";
    }
  }
});

// Burger menu

let burger = document.querySelector(".display-none-burger");
let span = document.querySelector(".burger span");
let menu = document.querySelector(".menu");
burger.onclick = () => {
  body.classList.toggle("lock");
  span.classList.toggle("crestik");
  menu.classList.toggle("animate");
};
