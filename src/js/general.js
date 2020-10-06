import $ from "jquery";
import mask from "jquery-mask-plugin";
import {Popup, PopupThanks } from "%modules%/modal/modal";
const popups = document.querySelectorAll('.popup');

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);

application.load(definitionsFromContext(context));

const initMask = () => {
  $(`[data-tel]`).mask("0 (000) 000-00-00", {placeholder: "+7 (___) ___-__-__"});
}

popups.forEach(function (popup) {
  new Popup(popup);
});
initMask();
