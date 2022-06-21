<template>
  <div id="app">
    <el-menu
      class="menu"
      :default-active="activeIndex2"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1"
        ><router-link to="/">首页</router-link></el-menu-item
      >
      <el-submenu index="2">
        <template slot="title">管理</template>
        <el-menu-item index="2-1"
          ><router-link to="/admin" tag="div"
            >查看商品</router-link
          ></el-menu-item
        >
        <el-menu-item index="2-2"
          ><router-link to="/admin/new/product" tag="div"
            >添加商品</router-link
          ></el-menu-item
        >
        <el-menu-item index="2-3"
          ><router-link to="/admin/manufacturers" tag="div"
            >查看生产商</router-link
          ></el-menu-item
        >
        <el-menu-item index="2-4"
          ><router-link to="/admin/new/manufacturer" tag="div"
            >添加生产商</router-link
          ></el-menu-item
        >
      </el-submenu>
      <el-menu-item index="3"
        ><router-link to="/cart" tag="div">购物车</router-link></el-menu-item
      >
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.el-submenu__title {
  margin-left: 40px;
}
</style>

<!-- 这里一个特殊的地方就是 el-menu-item 标签中的 tag 属性，我们将其值设置为 “div” 表示将该标签渲染为 “div” 盒子，
如果不设置该属性则该标签默认渲染为 “a” 标签，导致标签包裹的内容带有下划线，因此这里 tag 属性的设置是为了去除下划线。 -->