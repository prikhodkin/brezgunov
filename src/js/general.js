import $ from "jquery";
import mask from "jquery-mask-plugin";
import {Popup, PopupThanks } from "%modules%/modal/modal";
const popups = document.querySelectorAll('.popup');

global.jQuery = $;

require ("@fancyapps/fancybox/dist/jquery.fancybox");
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/);

application.load(definitionsFromContext(context));

const initMask = () => {
  $(`[data-tel]`).mask("+0 (000) 000-00-00", {placeholder: "+7 (___) ___-__-__"});
}

popups.forEach(function (popup) {
  new Popup(popup);
});
initMask();
$('[data-fancybox]').fancybox({
  protect: true
});

$("a[href^='#']").click(function(){
  var _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

const validate = (target) => {
  let length = target.value.length;
  if (length >= 18) {
    return true;
  } else {
    return false
  }
}

$(".form-callback").submit(function(evt) { //Change
  var th = $(this);

  const input = this.querySelector(`.send__tel`);
  console.log(validate(input))
  if(validate(input)) {
    $.ajax({
      type: "POST",
      url: "vendor/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(`.modal`).removeClass(`opened`);
      $(`.callback-thx`).addClass(`opened`);
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  } else {
    evt.preventDefault();
    alert(`Введен некорректный номер`);
  }
});


$(".form-tarif").submit(function(evt) { //Change
  var th = $(this);

  const input = this.querySelector(`.send__tel`);
  console.log(validate(input))
  if(validate(input)) {
    $.ajax({
      type: "POST",
      url: "vendor/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(`.modal`).removeClass(`opened`);
      $(`.callback-thx`).addClass(`opened`);
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  } else {
    evt.preventDefault();
    alert(`Введен некорректный номер`);
  }
});

$(".form-audit").submit(function(evt) { //Change
  var th = $(this);

  const input = this.querySelector(`.send__tel`);
  console.log(validate(input))
  if(validate(input)) {
    $.ajax({
      type: "POST",
      url: "vendor/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(`.modal`).removeClass(`opened`);
      $(`.audit-thx`).addClass(`opened`);
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  } else {
    evt.preventDefault();
    alert(`Введен некорректный номер`);
  }
});


$(".form-free").submit(function(evt) { //Change
  var th = $(this);

  const input = this.querySelector(`.send__tel`);
  console.log(validate(input))
  if(validate(input)) {
    $.ajax({
      type: "POST",
      url: "vendor/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(`.modal`).removeClass(`opened`);
      $(`.free-thx`).addClass(`opened`);
      setTimeout(function() {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  } else {
    evt.preventDefault();
    alert(`Введен некорректный номер`);
  }
});


$(`.send__tel`).on(`click`, function () {
  this.value = `+7`;
})



