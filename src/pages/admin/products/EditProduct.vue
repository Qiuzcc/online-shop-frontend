<template>
  <div>
    <div class="title">
      <h1>修改商品信息</h1>
    </div>
    <product-form
      @save-product="updateProduct"
      :model="product"
      :isExisted="true"
    >
    </product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
export default {
  name: "edit-product",
  components: {
    "product-form": ProductForm,
  },
  computed: {
    product() {
      let product = this.$store.getters.productById(this.$route.params["id"]);
      return { ...product };    //返回的是product的拷贝，为了保证在点击确认之前不修改本地的product
    },
  },
  methods: {
    updateProduct(model) {
        this.$store.dispatch('updateProduct',{
            product:model
        })
    },
  },
};
</script>