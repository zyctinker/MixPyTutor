import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import editProject from '@/components/editProject'
import editor from '@/components/editor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path:'/editProject',
      name:'editProject',
      component: editProject
    },
    {
      path:'/editor',
      name:'editor',
      component: editor
    }
  ]
})
