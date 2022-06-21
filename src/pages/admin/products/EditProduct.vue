<template>
  <div>
    <div class="title">
      <h1>修改商品信息</h1>
    </div>
    <product-form
      @save-product="updateProduct"
      :isExisted="true"
      :model="product"
    >
    </product-form>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm.vue";
export default {
  name: "edit-product",
  computed:{
    product() {
      let product = this.$store.getters.productById(this.$route.params["id"]);
      return { ...product ,manufacturer:{...product.manufacturer}};    
      //返回的是product的深拷贝，为了保证在点击确认之前不修改本地的product
    }
  },
  components: {
    "product-form": ProductForm,
  },
  methods: {
    updateProduct(product) {
        this.$store.dispatch('updateProduct',{
            product
        })
    },
  },
  created(){
    const {name=""} = this.product || {};
    if(!name){
      this.$store.dispatch('productById',{
        productId:this.$route.params["id"]
      })
    }
  }
};
</script>