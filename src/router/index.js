import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/reg',
    component: () => import('@/views/login/register'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/dashboard',
  //   children: [{
  //     path: 'dashboard',
  //     name: 'Dashboard',
  //     component: () => import('@/views/dashboard/index'),
  //     meta: { title: 'Dashboard', icon: 'dashboard' }
  //   }]
  // },

  {
    path: '/',
    // redirect: '/home',
    component: () => import('@/views/home/index')
  },
  {
    path: '/form',
    component: () => import('@/views/form/index')
  },
  {
    path: '/wform',
    component: () => import('@/views/wform/index')
  },
  {
    path: '/app',
    component: Layout,
    redirect: '/app/application',
    name: 'app',
    meta: { title: '应用管理', icon: 'application' },
    children: [
      {
        path: 'application',
        name: 'application',
        component: () => import('@/views/app/index'),
        meta: { title: 'application', icon: 'table' }
      },
      {
        path: 'authority',
        name: 'authority',
        component: () => import('@/views/authority/index'),
        meta: { title: 'authority', icon: 'table' }
      },
      {
        path: 'companyInfo',
        name: 'companyInfo',
        component: () => import('@/views/companyInfo/index'),
        meta: { title: 'companyInfo', icon: 'table' }
      },
      {
        path: 'organization',
        name: 'organization',
        component: () => import('@/views/organization/index'),
        meta: { title: 'organization', icon: 'table' }
      }
    ]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '应用管理', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },

  // {
  //   path: '/form',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'Form',
  //       component: () => import('@/views/form/index'),
  //       meta: { title: '权限管理', icon: 'form' }
  //     }
  //   ]
  // },
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
