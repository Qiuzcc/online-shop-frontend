<template>
    <div>
        <div class="title">
            <h1>这里是后台管理页</h1>
        </div>
        <div class="body">
            {{product.name}}
        </div>
    </div>
</template>

<script>
export default {
    name:"home",
    computed:{
        product(){
            return this.$store.state.products[0];
        }
    }
}
</script>