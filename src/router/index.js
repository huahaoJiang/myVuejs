import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import editorJ from '@/components/editorJ'
import tableJ from '@/components/tableJ'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/editorJ',
      name: 'editorJ',
      component: editorJ
    },
    {
      path: '/tableJ',
      name: 'tableJ',
      component: tableJ
    }
  ]
})
