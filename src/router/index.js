import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'
import Detail from '@/pages/Detail'

import Index from '@/pages/admin/Index'
import Products from '@/pages/admin/products/Products'
import NewProduct from '@/pages/admin/products/NewProduct'
import Manufacturers from '@/pages/admin/manufacturers/Manufacturers'
import NewManufacturer from '@/pages/admin/manufacturers/NewManufacturer'
import EditManufacturer from '@/pages/admin/manufacturers/EditManufacturer'
import EditProduct from '@/pages/admin/products/EditProduct'

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
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
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
          path:'manufacturers',
          name:'Manufacturers',
          component:Manufacturers
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
        {
          path:'manufacturers/edit/:id',
          name:'EditManufacturer',
          component:EditManufacturer
        },
        {
          path:'products/edit/:id',
          name:'EditProduct',
          component:EditProduct
        },
      ]
    }
  ]
})
