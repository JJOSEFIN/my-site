import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact,
    }
  ],
});
