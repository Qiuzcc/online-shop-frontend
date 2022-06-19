
export const productMutations = {
    ADD_TO_CART(state,payload){
        const {product} = payload;
        state.cart.push(product);
    },
    REMOVE_FROM_CART(state,payload){
        const {productId} = payload;
        state.cart = state.cart.filter(product => product._id !== productId);
    }
}

export const manufacturerMutations = {

}

export const cartMutations = {

}