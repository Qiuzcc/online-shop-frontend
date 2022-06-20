<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>制造商</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.manufacturer.name }}</td>
          <td class="modify">
            <router-link :to="'/admin/products/edit/'+product._id">修改</router-link>
          </td>
          <td class="remove">
            <a @click="removeProduct(product._id)" href="#">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table{
    margin:0 auto;
}
.modify{
    color:blue;
}
.remove{
    color: red;
}
</style>

<script>
import ProductList from "@/components/products/ProductList.vue";
export default {
  name: "admin-home",
  components: {
    "product-list": ProductList,
  },
  computed:{
    products(){
        return this.$store.getters.allProducts;
    }
  },
  methods:{
    removeProduct(productId){
        this.$store.dispatch('removeProduct',{productId});
    }
  },
  created(){
    if(this.$store.getters.allProducts.length ===0){
        this.$store.dispatch('allProducts');
    }
  }
};
</script>