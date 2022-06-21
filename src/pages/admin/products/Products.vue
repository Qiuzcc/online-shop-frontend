<template>
  <div class="products">
    <el-table class="products-table" :data="products">
      <el-table-column
        prop="name"
        label="产品名称"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="description"
        label="介绍"
        width="180"
      ></el-table-column>
      <el-table-column prop="price" label="价格" width="180"></el-table-column>
      <el-table-column
        prop="manufacturer.name"
        label="生产厂商"
        width="180"
      ></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button class="modify" type="text" size="small"
            ><router-link :to="'/admin/products/edit/' + scope.row._id"
              >修改</router-link
            ></el-button
          >
          <el-button
            class="remove"
            @click="
              removeProduct(scope.row._id), deleteRow(scope.$index, products)
            "
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "admin-home",
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  methods: {
    removeProduct(productId) {
      this.$store.dispatch("removeProduct", { productId });
    },
  },
  created() {
    if(this.$store.getters.allProducts.length===0){
      this.$store.dispatch("allProducts");
    }
  },
};
</script>

<style>
.products{
  padding-top:10px;
  text-align: center;;
}
.products-table {
  margin: 0 auto;
  width:950px;
}
.el-table .cell{
  text-align: center;
  padding:10px 0;
}
.modify {
  color: blue;
}
.remove {
  color: red;
}
</style>