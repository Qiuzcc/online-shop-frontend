<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :manufacturers="manufacturers"
    :isEditing="true"
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
      manufacturers: [
        {
          _id: "sam",
          name: "Samsung",
        },
        {
          _id: "apple",
          name: "Apple",
        },
      ],
    };
  },
  methods: {
    addProduct(model) {
      console.log("model", model);
    },
  },
};
</script>