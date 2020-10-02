import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ "name" ]

  greet() {
    console.log(`Hello, folder controller`)
  }

  get name() {
    return this.nameTarget.value
  }
}

var navToggle = document.querySelector('.header__toggle');
var navigation = document.querySelector('.header__nav');
var navClosed = document.querySelector('.navigation__close');

navToggle.addEventListener('click', function () {
  if (navigation.classList.contains('header__nav--closed')) {
    navigation.classList.remove('header__nav--closed');
    navigation.classList.add('header__nav--opened');
  }
});

navClosed.addEventListener('click', function () {
  if (navigation.classList.contains('header__nav--opened')) {
    navigation.classList.remove('header__nav--opened');
    navigation.classList.add('header__nav--closed');
  }
});

