"use strict";

var langElement = document.querySelectorAll('.header__lang');
langElement.forEach(function (item) {
  item.addEventListener('click', function () {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      slideUp(item.querySelector('.header__lang-more'));
    } else {
      item.classList.add('active');
      slideDown(item.querySelector('.header__lang-more'), '5px');
    }
  });
});
"use strict";

var colorTitleElement = document.getElementById('color-hover');
var selectedColorElement = document.querySelector('.itemcontainer__color.selected');
var allColorElement = document.querySelectorAll('.itemcontainer__color');
var togglersElements = document.querySelectorAll('.itemcontainer__togglehead');

if (colorTitleElement) {
  colorTitleElement.innerText = selectedColorElement.dataset.colotTitle;
}

allColorElement.forEach(function (item) {
  item.addEventListener('mouseenter', function () {
    colorTitleElement.innerText = item.dataset.colotTitle;
  });
  item.addEventListener('mouseleave', function () {
    colorTitleElement.innerText = selectedColorElement.dataset.colotTitle;
  });
});
togglersElements.forEach(function (item) {
  item.addEventListener('click', function () {
    console.log(item.nextElementSibling);

    if (item.classList.contains('active')) {
      item.classList.remove('active');
      slideUp(item.nextElementSibling);
    } else {
      item.classList.add('active');
      slideDown(item.nextElementSibling, '0px', '15px');
    }
  });
});
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  watchSlidesProgress: true,
  direction: "vertical"
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: swiper
  }
});
"use strict";

var filterBtnEl = document.querySelector('.open-filter-el');
var sortBtnEl = document.querySelector('.open-sort-el');
var filterEl = document.querySelector('.filter-el');
var sortEl = document.querySelector('.sort-el');
var favBtns = document.querySelectorAll('.cloitems__fav');
var clothPics = document.querySelectorAll('.cloitems__pics');
clothPics.forEach(function (item) {
  var lengthImgPic = item.querySelectorAll('img').length;
  var currentActivePic = 0;

  if (lengthImgPic > 1) {
    item.querySelectorAll('img')[0].classList.add('active');
    item.parentNode.querySelector('.cloitems__right').addEventListener('click', function () {
      if (currentActivePic + 1 < lengthImgPic) {
        currentActivePic++;
      } else {
        currentActivePic = 0;
      }

      item.querySelectorAll('img').forEach(function (item) {
        item.classList.remove('active');
      });
      item.querySelectorAll('img')[currentActivePic].classList.add('active');
    });
    item.parentNode.querySelector('.cloitems__left').addEventListener('click', function () {
      if (currentActivePic) {
        currentActivePic--;
      } else {
        currentActivePic = lengthImgPic - 1;
      }

      item.querySelectorAll('img').forEach(function (item) {
        item.classList.remove('active');
      });
      item.querySelectorAll('img')[currentActivePic].classList.add('active');
    });
  } else {
    item.parentNode.querySelector('.cloitems__right').classList.add('hide');
    item.parentNode.querySelector('.cloitems__left').classList.add('hide');
    item.querySelector('img').classList.add('active');
  }
});
favBtns.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('active');
  });
});

function slideDown(elem) {
  var pb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0px';
  var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0px';
  elem.style.height = "".concat(elem.scrollHeight, "px");
  elem.style.paddingBottom = pb;
  elem.style.paddingTop = pt;
}

function slideUp(elem) {
  elem.style.height = '0px';
  elem.style.paddingBottom = '0px';
  elem.style.paddingTop = '0px';
}

if (filterBtnEl) {
  filterBtnEl.addEventListener('click', function () {
    if (filterBtnEl.classList.contains('active')) {
      slideUp(filterEl);
      filterBtnEl.classList.remove('active');
    } else {
      sortBtnEl.classList.remove('active');
      slideUp(sortEl);
      slideDown(filterEl, '30px');
      filterBtnEl.classList.add('active');
    }
  });
}

if (sortBtnEl) {
  sortBtnEl.addEventListener('click', function () {
    if (sortBtnEl.classList.contains('active')) {
      slideUp(sortEl);
      sortBtnEl.classList.remove('active');
    } else {
      filterBtnEl.classList.remove('active');
      slideUp(filterEl);
      slideDown(sortEl, '30px');
      sortBtnEl.classList.add('active');
    }
  });
}
"use strict";

function createMobileMenu() {
  var _document$querySelect, _document$querySelect2;

  var icons = [];
  icons.push(document.querySelector('.header__fav').cloneNode(true));
  icons.push(document.querySelector('.header__cart').cloneNode(true));
  var loginButton = document.querySelector('.header__login').cloneNode(true);
  var dropdowns = [];
  document.querySelectorAll('.header__dropdown:not(.header__dropdown-close)').forEach(function (item) {
    dropdowns.push(item.cloneNode(true));
  });
  var mobileMenuButton = "\n    <div class=\"mobile-menu-button\">\n        <span></span>\n        <span></span>\n        <span></span>\n    </div>\n    ";
  document.querySelectorAll('.header__block:last-child')[0].insertAdjacentHTML('beforebegin', mobileMenuButton);
  var mobileMenuHtml = "\n    <div class=\"mobile-menu\">\n        <div class=\"mobile-menu-close\">\n            <svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <g id=\"close\">\n                <path id=\"Path 2\" d=\"M29.4282 29.4281L10.572 10.5719\" stroke=\"#333333\" stroke-linecap=\"round\"></path>\n                <path id=\"Path 2_2\" d=\"M29.428 10.5719L10.5718 29.4281\" stroke=\"#333333\" stroke-linecap=\"round\"></path>\n                </g>\n            </svg>\n        </div>\n        <div class=\"mobile-menu-header\"></div>\n        <div class=\"mobile-menu-body\"></div>\n    </div>\n    <div class=\"mobile-menu-overlay\"></div>\n    ";
  document.body.insertAdjacentHTML('beforeend', mobileMenuHtml);

  (_document$querySelect = document.querySelector('.mobile-menu-header')).append.apply(_document$querySelect, icons.concat([loginButton]));

  (_document$querySelect2 = document.querySelector('.mobile-menu-body')).append.apply(_document$querySelect2, dropdowns);

  document.querySelectorAll('.mobile-menu-body .header__dropdown-container').forEach(function (item) {
    slideUp(item);
  });
  document.querySelectorAll('.mobile-menu-body .header__dropdown-link').forEach(function (item) {
    item.addEventListener('click', function () {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
        slideUp(item.nextElementSibling);
      } else {
        item.classList.add('active');
        slideDown(item.nextElementSibling);
      }
    });
  });
  document.querySelector('.mobile-menu-close').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('active');
    document.body.classList.remove('noscroll');
  });
  document.querySelector('.mobile-menu-overlay').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.remove('active');
    document.body.classList.remove('noscroll');
  });
  document.querySelector('.mobile-menu-button').addEventListener('click', function () {
    document.querySelector('.mobile-menu').classList.add('active');
    document.body.classList.add('noscroll');
  });
}

createMobileMenu();
var basketItems = document.querySelector('.note__items');
var titlesBasket = document.querySelector('.note__titles');

if (basketItems) {
  basketItems.addEventListener('scroll', function (e) {
    if (!titlesBasket) return;
    titlesBasket.scrollLeft = e.target.scrollLeft;
  });
}
"use strict";

var searchBtn = document.querySelector('.header__search');
var cartBtn = document.querySelector('.header__cart');
var searchEl = document.querySelector('.search');
var searchOverlay = document.querySelector('.search-overlay');
var cartEl = document.querySelector('.cart');
var cartOverlay = document.querySelector('.cart-overlay');
var cartClose = document.querySelector('.cart__close');
var clothWithBtn = document.querySelector('.cart__with-btn');
var clothWithBody = document.querySelector('.cart__with-body');
var counterInCart = document.querySelectorAll('.cart__body-count');
counterInCart.forEach(function (item) {
  var counter = item.querySelector('.cart__body-count-counter');
  item.querySelector('.cart__body-count-remove').addEventListener('click', function () {
    if (+counter.innerText > 1) {
      counter.innerText = +counter.innerText - 1;
    }
  });
  item.querySelector('.cart__body-count-add').addEventListener('click', function () {
    counter.innerText = +counter.innerText + 1;
  });
  ;
});

if (clothWithBtn) {
  clothWithBody.style.height = "".concat(clothWithBody.clientHeight, "px");
  clothWithBody.style.paddingTop = '15px';
  clothWithBtn.addEventListener('click', function () {
    if (clothWithBtn.classList.contains('active')) {
      clothWithBtn.classList.remove('active');
      slideUp(clothWithBody);
    } else {
      clothWithBtn.classList.add('active');
      slideDown(clothWithBody, '0px', '15px');
    }
  });
}

function visibleSearchEl() {
  searchEl.classList.add('active');
}

function hideSearchEl() {
  searchEl.classList.remove('active');
}

function visibleCartEl() {
  cartEl.classList.add('active');
  document.body.classList.add('noscroll');
}

function hideCartEl() {
  cartEl.classList.remove('active');
  document.body.classList.remove('noscroll');
}

cartBtn.addEventListener('click', visibleCartEl);
cartOverlay.addEventListener('click', hideCartEl);
cartClose.addEventListener('click', hideCartEl);
searchBtn.addEventListener('click', visibleSearchEl);
searchOverlay.addEventListener('click', hideSearchEl);