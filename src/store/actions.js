import axios from "axios";
import { Message } from "element-ui";

import {
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS,
    REMOVE_FROM_MANUFACTURERS,
    REMOVE_FROM_MANUFACTURERS_SUCCESS,
    MANUFACTURER_BY_ID,
    MANUFACTURER_BY_ID_SUCCESS,
    UPDATE_MANUFACTURER,
    UPDATE_MANUFACTURER_SUCCESS,
    ADD_MANUFACTURER,
    ADD_MANUFACTURER_SUCCESS,
    REMOVE_FROM_PRODUCTS,
    REMOVE_FROM_PRODUCTS_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
}
    from './mutation-type'

const API_BASE = 'http://localhost:3000/api/v1';

export const productActions = {
    allProducts({ commit }) {
        commit(ALL_PRODUCTS);
        axios.get(`${API_BASE}/products`).then(response => {
            // console.log('response',response);   //测试
            commit(ALL_PRODUCTS_SUCCESS, {
                products: response.data,
            })
        })
    },
    productById({ commit }, payload) {
        commit(PRODUCT_BY_ID);
        const { productId } = payload;
        axios.get(`${API_BASE}/products/${productId}`).then(response => {
            commit(PRODUCT_BY_ID_SUCCESS, {
                product: response.data
            })
        })
    },
    removeProduct({commit},payload){
        commit(REMOVE_FROM_PRODUCTS);
        const {productId} = payload;
        // console.log('提示',productId);  //测试
        axios.delete(`${API_BASE}/products/${productId}`).then(()=>{
            commit(REMOVE_FROM_PRODUCTS_SUCCESS,{
                productId
            });
            Message({
                message:'删除成功！',
                type:'success'
            })
        }).catch(()=>{
            Message.error('出了点小故障，删除失败了！');
        })
    },
    addProduct({commit},payload){
        commit(ADD_PRODUCT);
        const {product:newProduct} = payload;
        axios.post(`${API_BASE}/products`,newProduct).then(()=>{
            commit(ADD_PRODUCT_SUCCESS,{
                newProduct
            });
            Message({
                message:'添加成功！',
                type:'success'
            })
        }).catch(()=>{
            Message.error('出了点小故障，商品添加失败！');
        })
    },
    updateProduct({commit},payload){
        commit(UPDATE_PRODUCT);
        const {product:newProduct} = payload;
        axios.put(`${API_BASE}/products/${newProduct._id}`,newProduct).then(()=>{
            commit(UPDATE_PRODUCT_SUCCESS,{
                product:newProduct,
            });
            Message({
                message:'更新成功！',
                type:'success'
            })
        }).catch(()=>{
            Message.error('出了点小故障，更新失败了！');
        })
    },
}

export const manufacturersActions = {
    allManufacturers({ commit }) {
        commit(ALL_MANUFACTURERS);
        axios.get(`${API_BASE}/manufacturers`).then(response => {
            commit(ALL_MANUFACTURERS_SUCCESS, {
                manufacturers: response.data
            })
        })
    },
    removeManufacturer({ commit }, payload) {
        commit(REMOVE_FROM_MANUFACTURERS);
        const { manufacturerId } = payload;
        axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`).then(response => {
            commit(REMOVE_FROM_MANUFACTURERS_SUCCESS, {
                manufacturerId
            });
            Message({
                message:'删除成功！',
                type:'success'
            })
        }).catch(()=>{
            Message.error('出了点小故障，删除失败了！');
        })
    },
    manufacturerById({ commit }, payload) {
        commit(MANUFACTURER_BY_ID);
        const { manufacturerId } = payload;
        axios.get(`${API_BASE}/manufacturers/${manufacturerId}`).then(response => {
            commit(MANUFACTURER_BY_ID_SUCCESS, {
                manufacturer: response.data
            })
        })
    },
    updateManufacturer({ commit }, payload) {
        commit(UPDATE_MANUFACTURER);
        const { manufacturer } = payload;
        axios.put(`${API_BASE}/manufacturers/${manufacturer._id}`, manufacturer).then(() => {
            commit(UPDATE_MANUFACTURER_SUCCESS, {
                manufacturer,
            });
            Message({
                message:'更新成功！',
                type:'success'
            })
        }).catch(()=>{
            Message.error('出了点小故障，更新失败了！');
        })
    },
    addManufacturer({ commit }, payload){
        commit(ADD_MANUFACTURER);
        const { manufacturer } = payload;
        axios.post(`${API_BASE}/manufacturers`, manufacturer).then(() => {
            commit(ADD_MANUFACTURER_SUCCESS, {
                manufacturer,
            });
            Message({
                message:'添加成功！',
                type:'success'
            })
        }).catch(()=>{
            Message.error('出了点小故障，生产厂商添加失败了！');
        })
    }
}