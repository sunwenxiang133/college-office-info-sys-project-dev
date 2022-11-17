import { defineStore } from 'pinia'
import { StoreName } from '../store-name'

export const LoginStore = defineStore(StoreName.LOGIN, {
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: [
        {
          id: 1,
          name: '一级菜单1',
          type: 1,
          url: '/',
          icon: 'icon',
          children: [
            {
              id: 2,
              url: '/',
              name: '二级菜单1',
              type: 2
            },
            {
              id: 3,
              url: '/',
              name: '二级菜单2',
              type: 2
            },
            {
              id: 4,
              url: '/main/system/menu',
              name: '二级菜单3',
              type: 2
            },
            {
              id: 5,
              url: '/',
              name: '二级菜单4',
              type: 2
            }
          ]
        },
        {
          id: 6,
          name: '一级菜单2',
          type: 1,
          url: '/',
          icon: 'icon',
          children: [
            {
              id: 7,
              url: '/',
              name: '二级菜单1',
              type: 2
            },
            {
              id: 8,
              url: '/',
              name: '二级菜单2',
              type: 2
            },
            {
              id: 9,
              url: '/',
              name: '菜单管理3',
              type: 2
            },
            {
              id: 10,
              url: '/',
              name: '角色管理4',
              type: 2
            }
          ]
        },
        {
          id: 61,
          name: '一级菜单2',
          type: 1,
          url: '/',
          icon: 'icon',
          children: [
            {
              id: 71,
              url: '/',
              name: '二级菜单1',
              type: 2
            },
            {
              id: 81,
              url: '/',
              name: '二级菜单2',
              type: 2
            },
            {
              id: 91,
              url: '/',
              name: '菜单管理3',
              type: 2
            },
            {
              id: 101,
              url: '/',
              name: '角色管理4',
              type: 2
            }
          ]
        },
        {
          id: 62,
          name: '一级菜单2',
          type: 1,
          url: '/',
          icon: 'icon',
          children: [
            {
              id: 72,
              url: '/',
              name: '二级菜单1',
              type: 2
            },
            {
              id: 82,
              url: '/',
              name: '二级菜单2',
              type: 2
            },
            {
              id: 92,
              url: '/',
              name: '菜单管理3',
              type: 2
            },
            {
              id: 102,
              url: '/',
              name: '角色管理4',
              type: 2
            }
          ]
        }
      ]
    }
  },
  getters: {},
  actions: {
    // async accountLoginAction({commit},payload:IAccount)
  }
})
