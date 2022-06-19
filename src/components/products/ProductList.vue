<template>
  <div>
    <div class="products">
      <div class="container">商品列表</div>
      <template v-for="product in products">
        <product-item :key="product._id" :product="product"></product-item>
      </template>
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}
.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
import ProductItem from './ProductItem.vue'
export default {
  name: "product-list",
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  components:{
    'product-item':ProductItem
  },
  created(){
    if(this.products.length===0){
      this.$store.dispatch('allProducts')
    }
  },
};
</script>