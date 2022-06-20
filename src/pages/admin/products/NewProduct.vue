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
      model: {},
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