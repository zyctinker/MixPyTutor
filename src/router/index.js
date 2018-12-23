import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import createCourse from '@/components/createCourse'
import myCourse from '@/components/myCourse'
import review from '@/components/review'
import feedbackEditor from '@/components/feedbackEditor'
import editProject from '@/components/editProject'
import editor from '@/components/editor'
import courseDetail from '@/components/courseDetail'
import studentProjectView from '@/components/studentProjectView'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },{
      path:'/editProject',
      name:'editProject',
      component: editProject,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }, {
      path:'/editor',
      name:'editor',
      component: editor,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }, {
      path:'/review',
      name:'review',
      component: review,
      meta: {
        keepAlive: true // 需要被缓存
      }
    }, {
      path:'/feedback-editor',
      name:'feedback-editor',
      component: feedbackEditor,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path:'/createCourse',
      name:'createCourse',
      component: createCourse,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path:'/myCourse',
      name:'myCourse',
      component: myCourse,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path:'/myCourse/courseDetail',
      name:'courseDetail',
      component: courseDetail,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path:'/student-project-view',
      name:'student-project-view',
      component: studentProjectView,
    }
  ]
})
