import  {modals}  from './modules/modals';
import {sliders} from './modules/sliders'
import {form} from './modules/form'

window.addEventListener('DOMContentLoaded', (): void => {
 
  modals();
  form();
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
