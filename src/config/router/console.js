export default [
      {
        path: '/dashboard',
        name:'dashboard',
        component: () => import('@/pages/Dashboard/index.vue'),
        meta: {
          title: "概览",
          icon: 'AppstoreOutlined',
          hidden: false,
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/pages/User/index.vue'),
        meta: {
          title: '用户列表',
          icon: 'UserOutlined',
          hidden: false,
        }
      },
      {
        path: '/user/detail',
        name: 'user-detail',
        component: () => import('@/pages/User/Detail.vue'),
        meta: {
          title: '用户详情',
          hidden: true
        },
      },
      {
        path: '/setting',
        name: 'setting',
        meta: {
          title: '系统设置',
          icon: 'SettingOutlined',
          hidden: false,
        },
        children: [
          {
            path: '/setting/auth',
            name: '权限管理',
            component: () => import('@/pages/Auth/index.vue'),
            meta: {
              title: '权限管理',
              hidden: false,
            },
          },
          {
            path: '/setting/organization',
            name: '组织管理',
            component: () => import('@/pages/Organization/index.vue'),
            meta: {
              title: '组织管理',
              hidden: false,
            },
          },
        ]
      },
  
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: () => import('@/pages/Home/index.vue'),
  //   meta: {
  //     title: '首页'
  //   }
  // },
  // {
  //   path: '',
  //   name: '',
  //   component: '',
  //   meta: {
  //     title: ''
  //   }
  // }
]