import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import editProject from '@/components/editProject'
import editor from '@/components/editor'
import testPythonJs from '@/components/testPythonJs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
    },{
      path:'/editProject',
      name:'editProject',
      component: editProject,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
    {
      path:'/editor',
      name:'editor',
      component: editor,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
  ]
})
