import axios from "axios";

import{
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
} 
from './mutation-type'

const API_BASE = 'http://localhost:3000/api/v1';

export const productActions = {
    allProducts({commit}){
        commit(ALL_PRODUCTS);
        axios.get(`${API_BASE}/products`).then(response=>{
            console.log('response',response);   //测试
            commit(ALL_PRODUCTS_SUCCESS,{
                products:response.data,
            })
        })
    }
}