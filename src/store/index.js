import Vue from "vue";
import Vuex from 'vuex';

import {productMutations,cartMutations,manufacturerMutations} from './mutations'
import {productActions} from './actions'

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
    }
})