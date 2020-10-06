import { Controller } from "stimulus";

export default class extends Controller {
  static targets = [ `item` ]

  connect() {
    if(window.innerWidth >= 1200)
    document.addEventListener(`scroll`, ()=> {
      this.addActive();
    })

  }

  addActive() {
    const activeClass = `customers__item--active`;

    this.itemTargets.forEach((item)=> {
      if(item.getBoundingClientRect().top <= 250) {
        item.classList.add(activeClass);
      }
    })
  }
}
