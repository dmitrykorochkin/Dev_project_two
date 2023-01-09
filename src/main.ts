import { modals } from './modules/modals';
import { sliders } from './modules/sliders'
import { form } from './modules/form'
import { mask } from './modules/mask'
import { checkTextInputs } from './modules/checkTextInputs';
import { showMoreStyles } from './modules/showMoreStyles';
import { calc } from './modules/calc';
import { filter } from './modules/filter';
import { picture } from './modules/picture';
import { accordions } from './modules/accordions';

window.addEventListener('DOMContentLoaded', (): void => {

  modals();
  form();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '#styles .row');
  filter();
  picture('.sizes-block');
  accordions('.accordion-heading');

  sliders({
    slides: '.feedback-slider-item',
    dir: 'horizontal',
    prev: '.main-prev-btn',
    next: '.main-next-btn'
  });
  sliders({
    slides: '.main-slider-item',
    dir: 'vertical'
  });
  calc({
    size: '#size',
    material: '#material',
    options: '#options',
    promocode: '.promocode',
    result: '.calc-price'
  });
});
