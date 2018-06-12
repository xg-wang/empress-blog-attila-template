import Component from '@ember/component';
import layout from '../templates/components/hidden-close';

export default Component.extend({
  tagName: 'a',
  classNames: ['hidden-close'],
  layout,

  click() {
    document.firstElementChild.classList.remove('menu-active');
  }
});
