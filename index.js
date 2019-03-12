/* Routing */
const router = new VueRouter({
  routes: [
    { path: '/', component: httpVueLoader('/pages/home.vue') },
    { path: '/work', component: httpVueLoader('/pages/work.vue') },
    { path: '/play', component: httpVueLoader('/pages/play.vue') },
    { path: '/about', component: httpVueLoader('/pages/about.vue') },
    { path: '/contact', component: httpVueLoader('/pages/contact.vue') },
    { path: '*', component: httpVueLoader('/pages/404.vue') }

  ]
})

/* Directives */
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

/* Create */
new Vue({
  router,
  el: '#app',
  components: {
    'site-header': httpVueLoader('/components/site-header.vue'),
    'navigation': httpVueLoader('/components/navigation.vue'),
    'section-header': httpVueLoader('/components/section-header.vue'),
  }
})
