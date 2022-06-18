import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

import Index from '@/pages/admin/Index'
import Products from '@/pages/Products'
import NewProduct from '@/pages/admin/NewProduct'
import NewManufacturer from '@/pages/admin/NewManufacturer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Index,
      children:[
        {
          path:'',
          name:'Products',
          component:Products
        },
        {
          path:'new/product',
          name:'NewProduct',
          component:NewProduct
        },
        {
          path:'new/manufacturer',
          name:'NewManufacturer',
          component:NewManufacturer
        },
      ]
    }
  ]
})
