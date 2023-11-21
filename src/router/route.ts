import { RouteRecordRaw } from 'vue-router';

// const modulesFiles = require.context('./modules', false, /\.ts$/);
// const modules: RouteConfig[] = modulesFiles
//   .keys()
//   .reduce((moduleArr: RouteConfig[], modulePath: string) => {
//     const moduleName: string = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
//     const value = modulesFiles(modulePath);
//     moduleArr.push(value[moduleName]);
//     return moduleArr;
//   }, []);

// 公共路由
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: { title: 'login' }
  },
  {
    path: '/news',
    component: () => import('@/views/news/index.vue'),
    name: 'News',
    meta: { title: 'news' },
    children: [
      {
        path: '/news/animal',
        component: () => import('@/views/news/animal.vue'),
        name: 'AnimalList',
        meta: { title: 'animalList' }
      },
      {
        path: '/news/nature',
        component: () => import('@/views/news/nature.vue'),
        name: 'NatureList',
        meta: { title: 'natureList' }
      }
    ]
  },
  // ...modules
]