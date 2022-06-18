<template>
    <div>
        <manufacturer-form
            @save-manufacturer="addManufacturer"
            :model="model"
            :isEditing="true"> 
        </manufacturer-form>
    </div>
</template>

<script>
import ManufacturerForm  from '@/components/ManufacturerForm.vue'
export default {
    name:"home",
    components:{
        'manufacturer-form':ManufacturerForm
    },
    methods:{
        addManufacturer(model){
            console.log('model',model);
        }
    },
    data(){
        return {
            model:{},
        }
    }
}
</script>