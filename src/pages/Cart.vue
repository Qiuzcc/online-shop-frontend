<template>
  <div>
    <div class="title">
      <h1>购物车</h1>
    </div>
    <template v-for="product in cart">
      <product-item :key="product._id" :product="product"></product-item>
    </template>
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
import ProductItem from '@/components/products/ProductItem.vue';
export default {
  name: "cart",
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  components:{
    'product-item':ProductItem
  }
};
</script>