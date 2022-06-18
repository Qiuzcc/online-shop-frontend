<template>
  <div>
    <div class="admin-new">
      <div class="comtainer">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="nav">
            <li>
              <router-link to="/admin">View Products</router-link>
            </li>
            <li>
              <router-link to="/admin/new/product">New Product</router-link>
            </li>
            <li>
              <router-link to="/admin/new/manufacturer">New Manufacturer</router-link>
            </li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>