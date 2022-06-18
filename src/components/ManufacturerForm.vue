<template>
  <div>
    <form @submit.prevent="saveManufacturer">
      <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <div class="form-group">
          <label for="name">名称</label>
          <input
            type="text"
            placeholder="厂商名称"
            name="name"
            v-model="model.name"
            class="form-control"
          />
        </div>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">添加厂商</span>
          <span v-else>更新厂商信息</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["model", "isEditing"],
  methods: {
    saveManufacturer() {
      this.$emit("save-manufacturer", this.model);
    },
  },
};
</script>