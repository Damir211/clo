"use strict";

var searchBtn = document.querySelector('.header__search');
var cartBtn = document.querySelector('.header__cart');
var searchEl = document.querySelector('.search');
var searchOverlay = document.querySelector('.search-overlay');
var cartEl = document.querySelector('.cart');
var cartOverlay = document.querySelector('.cart-overlay');
var cartClose = document.querySelector('.cart__close');

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