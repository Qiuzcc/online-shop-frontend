export const productGetters = {
    allProducts(state){
        return state.products;
    },
    productById:(state,getters)=>id=>{
        if(getters.allProducts.length>0){
            return getters.allProducts.filter(p=>p._id == id)[0];
        }else{
            return state.product;   //没有找到id，返回空对象
        }
    },
}

export const manufacturerGetters = {
    allManufacturers(state){
        return state.manufacturers;
    },
    manufacturerById:(state,getters)=>id=>{
        if(getters.allManufacturers.length>0){
            return getters.allManufacturers.filter(m=>m._id==id)[0];
        }else{
            return state.manufacturer;
        }
    },
}