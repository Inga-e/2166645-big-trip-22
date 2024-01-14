import AbstractView from "../framework/view/abstract-view.js";
import {FILTERS} from "../const.js";

function createNoPointsTemplate() {
  return (`
  <p class="trip-events__msg">${FILTERS.EVERYTHING}</p>
  `);
}

export default class NoPointsView extends AbstractView {
  get template() {
    return createNoPointsTemplate();
  }
}
