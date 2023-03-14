import { createRouter, createWebHashHistory } from 'vue-router';
// import { setupLayouts } from 'virtual:generated-layouts'
// import generatedRoutes from 'virtual:generated-pages'
import routesConsole from './console';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// let routes = [];
let routes = [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/Login/index.vue'),
		meta: {
			titie: '登录',
		},
	},
	{
		path: '/',
		name: '',
		redirect: '/dashboard',
		component: () => import('@/layout/console/index.vue'),
		children: [...routesConsole],
	},
];
// routes.push({
//   path: '/',
//   redirect: '/login',
// });
// generatedRoutes.forEach(v => {
//     routes.push(v?.meta?.layout != false ? setupLayouts([v])[0] : v)
// })

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
router.beforeEach(async (_to, _from, next) => {
	NProgress.start();
	next();
});

router.afterEach(() => {
	NProgress.done();
});

export default router;
