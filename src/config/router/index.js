import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
 
let routes = []
routes.push({
  path: '/',
  redirect: '/login',
});
generatedRoutes.forEach(v => {
    routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v)
})
 
const router = createRouter({
  history: createWebHashHistory(),
  routes
});
router.beforeEach(async (_to, _from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;