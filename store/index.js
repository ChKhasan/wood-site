// import axios from "axios";
// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);
export const state = () => ({
  data: [],
});


export const actions = {
 async getProducts({ commit }) {
    const product = await axios.get("https://plaza.choopon.uz/api/products")
      commit("SET_PRODUCTS", product);
      return product
    
  },
};

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.data.push(...products)
  },
};

// export default new Vuex.Store({
//   state: {
//     data: [],
//   },
//   actions: {
//     getProducts({ commit }) {
//       axios.get("https://plaza.choopon.uz/api/products").then((res) => {
//         console.log(res.data.data.data);
//         let products = res.data.data.data;
//         commit("SET_PRODUCTS", products);
//       });
//     },
//   },
//   mutations: {
//     SET_PRODUCTS(state, products) {
//       state.data = products;
//     },
//   },
// });
