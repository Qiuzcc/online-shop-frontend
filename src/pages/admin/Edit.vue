<template>
    <div>
        <div class="title">
            <h1>{{msg}}/{{$route.params.id}}</h1>
        </div>
    </div>
</template>

<script>
export default {
    name:"home",
    data(){
        return{
            msg:"Edit页"
        }
    }
}
</script>