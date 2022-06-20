<template>
    <div>
        <manufacturer-form
            @save-manufacturer="addManufacturer"
            :manufacturer="model"
            :isExisted="false"> 
        </manufacturer-form>
    </div>
</template>

<script>
import ManufacturerForm  from '@/components/ManufacturerForm.vue'
export default {
    name:"new-manufacturer",
    components:{
        'manufacturer-form':ManufacturerForm
    },
    methods:{
        addManufacturer(model){
            this.$store.dispatch('addManufacturer',{
                manufacturer:model,
            })
        }
    },
    data(){
        return {
            model:{}    //向子组件传递一个空对象，用来接受新的数据
        }
    }
}
</script>