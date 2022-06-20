<template>
  <div>
    <manufacturer-form
      @save-manufacturer="updateManufacturer"
      :manufacturer="manufacturer"
      :isExisted="true"
    ></manufacturer-form>
  </div>
</template>

<script>
import ManufacturerForm from "@/components/ManufacturerForm.vue";
export default {
  name: "edit-manufacturer",
  components: {
    "manufacturer-form": ManufacturerForm,
  },
  computed: {
    manufacturer() {
      const manufacturer = this.$store.getters.manufacturerById(
        this.$route.params["id"]
      );
      return { ...manufacturer };
      //返回manufacturer的拷贝，是为了在修改manufacturer的拷贝后，在保存之前不修改本地的manufacturer
    },
  },
  created() {
    //如果本地没有厂商数据，那么就直接从后台获取指定id厂商数据
    if (this.$store.getters.allManufacturers.length === 0) {
      this.$store.dispatch("manufacturerById", {
        manufacturerId: this.$route.params["id"],
      });
    }
  },
  methods: {
    updateManufacturer(newManufacturer) {
      this.$store.dispatch("updateManufacturer", {
        manufacturer: newManufacturer,
      });
    },
  },
};
</script>