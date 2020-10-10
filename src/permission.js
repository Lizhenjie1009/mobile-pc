import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// import { getStorage, setStorage } from '@/utils/auth' // get token from cookie
// // import getPageTitle from '@/utils/get-page-title'

// NProgress.configure({ showSpinner: false }) // NProgress Configuration

// const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist
const ISPHONE = navigator.userAgent.match(
  /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
)
// console.log(router.options)
router.beforeEach((to, from, next) => {
  if (ISPHONE && to.meta.type !== 'mobile') {
    const routers = router.options.routes.filter(v => v.name === 'mobile')[0]
    // const path = routers.filter(v => v.name)
    console.log(routers, to.path)
    if (routers.path) {
      next(routers.path)
    } else {
      next('/')
    }
  }
  if (!ISPHONE && to.meta.type !== 'pc') {
    const routers = router.options.routes.filter(v => v.name === 'pc')[0]
    if (routers.path) {
      next(routers.path)
    } else {
      next('/')
    }
  }
  console.log(to.path)
  next()
})
// router.beforeEach(async (to, from, next) => {
//   // start progress bar
//   NProgress.start()

//   // determine whether the user has logged in
//   const hasToken = getStorage('token')

//   if (hasToken) {
//     if (to.path === '/login') {
//       // if is logged in, redirect to the home page
//       next({ path: '/' })
//       NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
//     } else {
//       // determine whether the user has obtained his permission roles through getInfo
//       const hasRoles = store.getters.roles && store.getters.roles.length > 0

//       if (hasRoles) {
//         next()
//       } else {
//         try {
//           // get user info
//           // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
//           const roles = await store.dispatch('user/generateRoles', [hasToken.username])

//           // generate accessible routes map based on roles
//           const accessRoutes = await store.dispatch('permission/generateRoutes', roles)

//           // dynamically add accessible routes
//           router.addRoutes(accessRoutes)

//           // hack method to ensure that addRoutes is complete
//           // set the replace: true, so the navigation will not leave a history record
//           next({ ...to, replace: true })
//         } catch (error) {
//           // remove token and go to login page to re-login
//           // await store.dispatch('user/resetToken')
//           Message.error(error || 'Has Error')
//           next(`/login?redirect=${to.path}`)
//           NProgress.done()
//         }
//       }
//     }
//   } else {
//     /* has no token */
//     if (whiteList.indexOf(to.path) !== -1) {
//       // in the free login whitelist, go directly
//       next()
//     } else {
//       // other pages that do not have permission to access are redirected to the login page.
//       next(`/login?redirect=${to.path}`)
//       NProgress.done()
//     }
//   }
// })

// router.afterEach(() => {
//   // finish progress bar
//   NProgress.done()
// })
