import  {modals}  from './modules/modals';
import {sliders} from './modules/sliders'
import {form} from './modules/form'
import {mask} from './modules/mask'
import { checkTextInputs } from './modules/checkTextInputs';
import {showMoreStyles} from './modules/showMoreStyles'

window.addEventListener('DOMContentLoaded', (): void => {
 
  modals();
  form();
  mask('[name="phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  showMoreStyles('.button-styles', '.styles-2');

  sliders({
    slides: '.feedback-slider-item', 
    dir: 'horizontal',
    prev: '.main-prev-btn',
    next: '.main-next-btn'
  });
  sliders({
    slides:'.main-slider-item', 
    dir:'vertical'
  });
});
