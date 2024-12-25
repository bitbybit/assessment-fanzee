import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./home'),
  },
  {
    path: '/movie/:id',
    name: 'movie',
    component: () => import('./movie'),
  },
]
