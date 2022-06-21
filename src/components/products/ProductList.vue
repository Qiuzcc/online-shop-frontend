<template>
  <div>
    <div class="products">
      <div class="container">商品列表</div>
      <product-item :products="products"></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "product-list",
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  components: {
    "product-item": ProductItem,
  },
  created() {
    if (this.$store.getters.allProducts.length === 0) {
      this.$store.dispatch("allProducts");
    }
  },
};
</script>