import Vue from 'vue'
import Router from 'vue-router'
import Words from '@/components/Words'
import Test from '@/components/Test'
import Lists from '@/components/Lists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Words',
      component: Words
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/list',
      name: 'Lists',
      component: Lists
    }
  ]
})
