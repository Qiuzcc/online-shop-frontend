<template>
  <div class="productInfo">
    <el-form
      class="form"
      ref="form"
      label-width="180px"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0,0,0,0.8)"
    >
      <el-form-item label="Name">
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="modelData.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer">
        <el-select
          v-model="modelData.manufacturer.name"
          clearable
          placeholder="请选择生产厂商"
        >
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Image">
        <el-input v-model="modelData.image"></el-input>
      </el-form-item>
      <el-form-item label="Description">
        <el-input type="textarea" v-model="modelData.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isExisted" type="primary" native-type="submit" @click="onSubmit"
          >更新商品信息</el-button
        >
        <el-button v-else @click="onSubmit">添加商品</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "product-form",
  props: ["isExisted", "model"],
  methods: {
    onSubmit() {
      const manufacturer = this.manufacturers.find(
        (item) => item.name === this.modelData.manufacturer.name
      );
      this.modelData.manufacturer = manufacturer;

      this.$emit("save-product", this.modelData);
      //定义一个对外的函数名参数接口，用来接受父组件传进来的函数
      //把model传递给父组件
    },
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
    loading(){
      return this.$store.state.showLoader
    }
  },
  data() {
    return {
      modelData: { manufacturer: { name: "" } },
    };
  },
  created() {
    this.modelData = {
      ...this.model,
      manufacturer: { ...this.model.manufacturer },
    };
    if (this.$store.getters.allManufacturers.length === 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  watch: {
    model(val, oldVal) {
      this.modelData = val;
    },
  },
};
</script>

<style>
.productInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 60px;
}
</style>