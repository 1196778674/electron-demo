import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'Index',
    component: require('@/components/Index').default,
    children: [{
      path: '/',
      component: require('@/components/Index/swap').default
    }, {
      path: '/usdt',
      name: 'usdt',
      component: require('@/components/Index/usdt').default
    }, {
      path: '/half',
      name: 'half',
      component: require('@/components/Index/half').default
    }, {
      path: '/swaps',
      name: 'swaps',
      component: require('@/components/Index/swap').default
    }, {
      path: '/login',
      name: 'login',
      component: require('@/components/Index/login').default
    }, {
      path: '/register',
      name: 'register',
      component: require('@/components/Index/register').default
    }]
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})

