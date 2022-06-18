<template>
    <form @submit.prevent="saveProduct">
        <div col-lg-5 col-md-5 col-sm-12 col-xs-12>
            <div class="form-group">
                <label for="name">名称</label>
                <input type="text" name="name" placeholder="name" v-model="model.name" class="form-control">
            </div>
            <div class="form-group">
                <label for="price">价格</label>
                <input type="number" name="price" placeholder="price" v-model="model.price" class="form-control">
            </div>
            <div class="form-group">
                <label for="manufacturer">厂商</label>
                <select name="manufacturer" type="text" class="form-control" v-model="model.manufacturer">
                    <template v-for="manufacturer in manufacturers">
                        <option :value="manufacturer._id" :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)">{{manufacturer.name}}</option>
                    </template>
                </select>
            </div>
        </div>

        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
            <div class="form-group">
                <label for="image">Image</label>
                <input type="text" class="form-control" placeholder="Image" v-model="model.image" name="image">
            </div>
        </div>

        <div class="form-group">
            <label for="description">Description</label>
            <textarea name="description" rows="5" placeholder="Description" v-model="model.description"></textarea>
        </div>

        <div class="form-group new-button">
            <button class="button">
                <i class="fa fa-pencil"></i>
                <span v-if="isEditing">更新商品信息</span>
                <span v-else>添加商品</span>
            </button>
        </div>
    </form>
</template>

<script>
export default {
    props:['model','manufacturers','isEditing'],
    methods:{
        saveProduct(){
            this.$emit('save-product',this.model)   
            //定义一个对外的函数名参数接口，用来接受父组件传进来的函数
            //把model传递给父组件
        }
    }
}
</script>