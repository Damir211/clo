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

var slideDown = function slideDown(elem) {
  var pb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0px';
  var pt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0px';
  elem.style.height = "".concat(elem.scrollHeight, "px");
  elem.style.paddingBottom = pb;
  elem.style.paddingTop = pt;
};

var slideUp = function slideUp(elem) {
  elem.style.height = '0px';
  elem.style.paddingBottom = '0px';
  elem.style.paddingTop = '0px';
};

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
}

function hideCartEl() {
  cartEl.classList.remove('active');
}

cartBtn.addEventListener('click', visibleCartEl);
cartOverlay.addEventListener('click', hideCartEl);
cartClose.addEventListener('click', hideCartEl);
searchBtn.addEventListener('click', visibleSearchEl);
searchOverlay.addEventListener('click', hideSearchEl);