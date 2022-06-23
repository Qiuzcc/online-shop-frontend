import Vue from "vue";
import Vuex from 'vuex';

import {userMutations,productMutations,cartMutations,manufacturerMutations} from './mutations'
import {productActions,manufacturersActions} from './actions'
import {productGetters,manufacturerGetters} from './getters' 

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        user:{},
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
        ...userMutations
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