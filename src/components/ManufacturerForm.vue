<template>
  <div class="manufacturerInfo">
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
        <el-input v-model="manufacturerData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isExisted" type="primary" native-type="submit" @click="onSubmit"
          >更新厂商信息</el-button
        >
        <el-button v-else @click="onSubmit">添加厂商</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: ["manufacturer", "isExisted"],
  data(){
    return{
      manufacturerData:{name:''}
    }
  },
  created(){
    this.manufacturerData = this.manufacturer
  },
  watch:{
    model(val,oldVal){
      this.manufacturerData = val;  //动态监听视图层数据变化并同步到数据层
    }
  },
  computed:{
    loading(){
      return this.$store.state.showLoader
    }
  },
  methods: {
    onSubmit() {
      this.$emit("save-manufacturer", this.manufacturerData); //在script内部引用props里的变量需要在前面加上this.
    },
  },
};
</script>

<style>
.manufacturerInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 50px;
}
</style>