import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import Jindu from '@/components/jindu'
import Es6 from '@/components/es6'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:"/Index",
      component:Index,
    },
    {
      path:"/Jindu",
      component:Jindu
    },
    {
      path:"/Es6",
      component:Es6
    }
  ]
})
