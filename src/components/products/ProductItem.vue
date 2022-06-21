<template>
  <div class="products">
    <el-table class="products-table" :data="products" max-height="750">
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
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <product-button :id="scope.row._id"></product-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<!-- el-table 表格组件需要传入一个数组作为 data 属性，并将每个元素对象作为 prop 传入表格，按照对应的列名展示出来 -->
<!-- 使用 scope.row 获取指定行对象并将其 id 传递给了 ProductButton 按钮组件 -->
<!-- 通过 slot-scope 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据。 -->

<style>
.products {
  padding-top: 10px;
  text-align: center;
}
.products-table {
  margin: 0 auto;
  width: 950px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px 0;
}
</style>

<script>
import ProductButton from "./ProductButton.vue";
export default {
  name: "product-item",
  props: ["products"],
  components: {
    "product-button": ProductButton,
  },
};
</script>