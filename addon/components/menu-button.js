import Component from '@ember/component';
import layout from '../templates/components/menu-button';

export default Component.extend({
  classNames: ['nav-button', 'menu-button'],
  tagName: 'span',
  layout,

  actions: {
    menu() {
      let html = document.firstElementChild;
      if(!html.classList.contains('menu-active')) {
        html.classList.add('menu-active');
      } else {
        html.classList.remove('menu-active');
      }
    }
  }
});
