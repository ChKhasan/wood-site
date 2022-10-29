/* eslint-disable */

export default {
  async getProducts(axios, url) {
    try {
      let res;

      if (axios) {
        res = await axios.get(`/products?paginate=18`);
      } else {
        res = await $nuxt.$axios.get(`/products?paginate=18`);
      }
      return res.data.data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
