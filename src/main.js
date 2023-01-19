import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

library.add(faTwitter, faInstagram, faFacebookF, faClock);


createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
