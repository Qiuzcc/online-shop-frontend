<template>
  <div>
    <router-link :to="'/detail/' + product._id" class="product-link">
      <p class="product_name">产品名称：{{ product.name }}</p>
      <p class="product_price">产品价格：{{ product.price }}</p>
      <p class="product_description">产品描述：{{ product.description }}</p>
      <p class="product_manufacturer">厂商：{{ product.manufacturer.name }}</p>
      <img :src="product.image" alt="" class="product__image" />
    </router-link>

    <product-button :product="product"></product-button>
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
import ProductButton from "./ProductButton.vue";
export default {
  name: "product-item",
  props: ["product"],
  components: {
    "product-button": ProductButton,
  },
};
</script>