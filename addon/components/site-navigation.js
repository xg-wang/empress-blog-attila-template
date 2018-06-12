import Component from '@ember/component';
import layout from '../templates/components/site-navigation';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  blog: service(),
  layout,

  rssFeed: computed('blog.host', function() {
    if(!this.blog.host) {
      return;
    }
    return `https://feedly.com/i/subscription/feed${encodeURIComponent('/' + this.blog.host + '/rss.xml')}`;
  }),

  click() {
    document.firstElementChild.classList.remove('menu-active');
  }
});
