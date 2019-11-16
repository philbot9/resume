import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

// You can also pass in the default options
Vue.use(VueScrollTo, {
  duration: 300,
  easing: 'ease',
  offset: -100,
  force: true,
  cancelable: true
})
