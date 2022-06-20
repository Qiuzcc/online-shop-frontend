
export const productMutations = {
    ALL_PRODUCTS(state) {
        state.showLoader = true;
    },
    ALL_PRODUCTS_SUCCESS(state, payload) {
        state.showLoader = false;
        const { products } = payload;
        state.products = products;
    },
    PRODUCT_BY_ID(state) {
        state.showLoader = true;
    },
    PRODUCT_BY_SUCCESS(state, payload) {
        state.showLoader = false;
        const { product } = payload;
        state.product = product;
    },
    REMOVE_FROM_PRODUCTS(state) {
        state.showLoader = true;
    },
    REMOVE_FROM_PRODUCTS_SUCCESS(state, payload) {
        state.showLoader = false;
        const { productId } = payload;
        state.products = state.products.filter(p => p._id !== productId);
    },
    ADD_PRODUCT(state) {
        state.showLoader = true;
    },
    ADD_PRODUCT_SUCCESS(state, payload) {
        state.showLoader = false;
        const { newProduct } = payload;
        state.products = state.products.concat(newProduct);
    },
    UPDATE_PRODUCT(state) {
        state.showLoader = true;
    },
    UPDATE_PRODUCT_SUCCESS(state, payload) {
        state.showLoader = false;
        const { product:newProduct } = payload;
        state.products = state.products.map(p=>{
            if(p._id===newProduct._id){
                return newProduct;
            }
            return p;
        })
    },
}

export const manufacturerMutations = {
    ALL_MANUFACTURERS(state) {
        state.showLoader = true;
    },
    ALL_MANUFACTURERS_SUCCESS(state, payload) {
        state.showLoader = false;
        const { manufacturers } = payload;
        state.manufacturers = manufacturers;
    },
    REMOVE_FROM_MANUFACTURERS(state) {
        state.showLoader = true;
    },
    REMOVE_FROM_MANUFACTURERS_SUCCESS(state, payload) {
        state.showLoader = false;
        const { manufacturerId } = payload;
        state.manufacturers = state.manufacturers.filter(m => m._id != manufacturerId);
    },
    MANUFACTURER_BY_ID(state) {
        state.showLoader = true;
    },
    MANUFACTURER_BY_ID_SUCCESS(state, payload) {
        state.showLoader = false;
        const { manufacturer } = payload;
        state.manufacturer = manufacturer;
    },
    UPDATE_MANUFACTURER(state) {
        state.showLoader = true;
    },
    UPDATE_MANUFACTURER_SUCCESS(state, payload) {
        state.showLoader = false;
        const { manufacturer: newManufacturer } = payload;
        state.manufacturers = state.manufacturers.map(m => {
            if (m._id === newManufacturer._id) {
                return newManufacturer;
            }
            return m;
        })
    },
    ADD_MANUFACTURER(state) {
        state.showLoader = true;
    },
    ADD_MANUFACTURER_SUCCESS(state, payload) {
        state.showLoader = false;
        const { manufacturer: newManufacturer } = payload;
        state.manufacturers = state.manufacturers.concat(newManufacturer);
    }
}

export const cartMutations = {
    ADD_TO_CART(state, payload) {
        const { product } = payload;
        state.cart.push(product);
    },
    REMOVE_FROM_CART(state, payload) {
        const { productId } = payload;
        state.cart = state.cart.filter(product => product._id !== productId);
    }
}