import Vue from 'vue'
import Router from 'vue-router'
// import login from './components/login.vue'
import body from './components/body.vue'
// import view from './components/view.vue'
// import Open from './components/open.vue'
//import logout from './components/logout.vue'



Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'Body',
      component: body
    },
    {
      path: '/open',
      name: 'open',
      component: () => import('./components/open.vue'),
    },
    {
      path: '/view',
      name: 'view',
      component: () => import('./components/view.vue'),
      // meta: {
      //   requiresLogin: true
      // }
    }, 
    {
      path: '/Navbar',
      name: 'Navbar',
      component: () => import('./components/Navbar.vue'),
      // meta: {
      //   requiresLogin: true
      // }
    }, 


    // {
    //   path: '/logout',
    //   name: 'logout',
    //   component: () => import('./components/logout.vue')
    // }
  ]
  
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router
  

