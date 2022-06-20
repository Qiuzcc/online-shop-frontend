import Vue from "vue";
import Vuex from 'vuex';

import {productMutations,cartMutations,manufacturerMutations} from './mutations'
import {productActions,manufacturersActions} from './actions'
import {productGetters,manufacturerGetters} from './getters' 

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        cart: [],
        showLoader: false,
        product: {},
        products: [],
        manufacturer: {},
        manufacturers: [],
    }, 
    mutations:{
        ...productMutations,
        ...cartMutations,
        ...manufacturerMutations,
    },
    actions:{
        ...productActions,
        ...manufacturersActions,
    },
    getters:{
        ...productGetters,
        ...manufacturerGetters,
    }
})