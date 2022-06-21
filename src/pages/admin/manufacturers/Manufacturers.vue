<template>
  <div class="manufacturers">
    <el-table class="manufacturers-table" :data="manufacturers">
      <el-table-column
        prop="name"
        label="生产厂商"
        width="180px"
      ></el-table-column>
      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button class="modify" type="text">
            <router-link :to="'/admin/manufacturers/edit/' + scope.row._id"
              >修改</router-link
            >
          </el-button>
          <el-button
            class="remove"
            @click="
              removeManufacturer(scope.row._id),
                deleteRow(scope.$index, products)
            "
            type="text"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  created() {
    if (this.manufacturers.length == 0) {
      this.$store.dispatch("allManufacturers");
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers;
    },
  },
  methods: {
    removeManufacturer(manufacturerId) {
      const res = confirm("是否删除此厂商？");
      if (res) {
        this.$store.dispatch("removeManufacturer", { manufacturerId });
      }
    },
  },
};
</script>

<style>
.manufacturers {
  padding-top: 20px;
  text-align: center;
}
.manufacturers-table {
  margin: 0 auto;
  width: 380px;
}
.el-table .cell {
  text-align: center;
  padding: 10px 0;
}
.modify {
  color: blue;
}

.remove {
  color: red;
}
</style>