const router = new VueRouter({
  // mode: 'history',
  routes: [
    { path: '/', component: httpVueLoader('/pages/home.vue') },
    { path: '/work', component: httpVueLoader('/pages/work.vue') },
    { path: '/play', component: httpVueLoader('/pages/play.vue') },
    { path: '/about', component: httpVueLoader('/pages/about.vue') },
    { path: '/contact', component: httpVueLoader('/pages/contact.vue') },
    { path: '*', component: httpVueLoader('/pages/404.vue') }

  ]
})

new Vue({
  router,
  el: '#app',
  components: {
    'site-header': httpVueLoader('/components/site-header.vue'),
    'navigation': httpVueLoader('/components/navigation.vue'),
    'section-header': httpVueLoader('/components/section-header.vue'),
  }
})
