
export const productMutations = {
    ALL_PRODUCTS(state){
        state.showLoader = true;
    },
    ALL_PRODUCTS_SUCCESS(state,payload){
        state.showLoader = false;
        const {products} = payload;
        state.products = products;
    }
}

export const manufacturerMutations = {

}

export const cartMutations = {
    ADD_TO_CART(state,payload){
        const {product} = payload;
        state.cart.push(product);
    },
    REMOVE_FROM_CART(state,payload){
        const {productId} = payload;
        state.cart = state.cart.filter(product => product._id !== productId);
    }
}