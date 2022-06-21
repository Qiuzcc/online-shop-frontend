<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :isExisted="false"
  >
  </product-form>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
export default {
  name: "home",
  components: {
    "product-form": ProductForm,
  },
  data() {
    return {
      model: {manufacturer:{name:''}}   
      //需要给其一个默认初始形式 model: {manufacturer: {name: ' '}}，防止在子组件表单中无法访问 name 属性导致报错
      //不过在使用element ui组件之前是并不需要的，这是el ui的区别
    }
  },
  methods: {
    addProduct(model) {
      this.$store.dispatch('addProduct',{
        product:model
      })
    },
  },
};
</script>