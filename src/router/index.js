import Vue from 'vue'
import Router from 'vue-router'
const ISPHONE = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
Vue.use(Router)
const redirectPath = ISPHONE ? '/m_index' : '/p_index'
export const constRoutes = [
  {
    path: '/',
    name: 'home',
    redirect: redirectPath,
  },
  {
    path: '/p_index',
    name: 'pc',
    redirect: '/p_home',
    component: () => import('@/views/pc/index'),
    meta: {
      title: '首页',
      type: 'pc'
    },
    children: [
      {
        path: '/p_home',
        name: 'p_home',
        component: () => import('@/views/pc/Home'),
        meta: {
          type: 'pc'
        }
      },
      {
        path: '/p_detail',
        name: 'p_detail',
        component: () => import('@/views/pc/Detail'),
        meta: {
          type: 'pc'
        }
      }
    ]
  },
  {
    path: '/m_index',
    name: 'mobile',
    component: () => import('@/views/phone/index'),
    redirect: '/m_home',
    meta: {
      title: '首页',
      type: 'mobile'
    },
    children: [
      {
        path: '/m_home',
        name: 'm_home',
        component: () => import('@/views/phone/Home'),
        meta: {
          type: 'mobile'
        }
      },
      {
        path: '/m_detail',
        name: 'm_detail',
        component: () => import('@/views/phone/Detail'),
        meta: {
          type: 'mobile'
        }
      },
      {
        path: '/m_my',
        name: 'm_my',
        component: () => import('@/views/phone/My'),
        meta: {
          type: 'mobile'
        }
      }
    ]
  },
]

// {
//   alwaysShow: true, // will always show the root menu
//   meta: {
//     title: 'Permission',
//     icon: 'lock',
//     roles: ['admin', 'editor'] // you can set roles in root nav
//   },
//   children: [
//     {
//       path: 'role',
//       component: () => import('@/views/permission/role'),
//       name: 'RolePermission',
//       meta: {
//         title: 'Role Permission',
//         roles: ['admin']
//       }
//     }
//   ]
// },

// export const asyncRoutes = [
//   {
//     path: '/excel',
//     name: 'excel',
//     component: Layout,
//     redirect: '/excel/excel-export',
//     meta: {
//       title: 'Excel',
//       roles: ['admin', 'editor']
//     },
//     children: [
//       {
//         path: '/excel/excel-export',
//         name: 'excel-export',
//         component: () => import('@/views/ExcelPage/ExcelExport'),
//         meta: {
//           title: '导出Excel',
//           roles: ['admin', 'editor']
//         }
//       },
//       {
//         path: '/excel/excel-selected',
//         name: 'excel-selected',
//         component: () => import('@/views/ExcelPage/ExcelSelected'),
//         meta: {
//           title: '导出已选Excel',
//           roles: ['admin']
//         }
//       }
//     ]
//   },
//   {
//     path: '/input',
//     component: Layout,
//     meta: {
//       title: '表单',
//       roles: ['admin', 'editor']
//     },
//     children: [
//       {
//         path: '/input/index',
//         name: 'input',
//         component: () => import('@/views/InputPage/index'),
//         meta: {
//           title: '表单',
//           roles: ['admin', 'editor']
//         }
//       }
//     ]
//   },
//   {
//     path: '/list',
//     component: Layout,
//     meta: {
//       title: '拖拽列表',
//       roles: ['admin', 'editor']
//     },
//     children: [
//       {
//         path: '/list/index',
//         name: 'list',
//         component: () => import('@/views/ListPage/index'),
//         meta: {
//           title: '列表',
//           roles: ['admin', 'editor']
//         }
//       }
//     ]
//   },
//   {
//     path: '/permission',
//     component: Layout,
//     meta: {
//       title: '权限',
//       roles: ['admin']
//     },
//     children: [
//       {
//         path: '/permission/index',
//         name: 'permission',
//         component: () => import('@/views/Permission/index'),
//         meta: {
//           title: '权限',
//           roles: ['admin']
//         }
//       }
//     ]
//   },
//   {
//     path: '/visualization',
//     component: Layout,
//     meta: {
//       title: '可视化'
//     },
//     children: [
//       {
//         path: '/visualization/index',
//         name: 'visualization',
//         component: () => import('@/views/Visualization'),
//         meta: {
//           title: '可视化'
//         }
//       }
//     ]
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ]

// {
//   path: '/tab',
//   component: Layout,
//   children: [
//     {
//       path: 'index',
//       component: () => import('@/views/tab/index'),
//       name: 'Tab',
//       meta: { title: 'Tab', icon: 'tab' }
//     }
//   ]
// },

const createRouter = () => new Router({
  routes: constRoutes
})

const router = createRouter()

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
