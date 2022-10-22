/* eslint-disable */

export default {
    async getProducts(axios,url) {
      try {
        let res
  
        if (axios) {
          res = await axios.get(`/products`)
        } else {
          res = await $nuxt.$axios.get(`/products`)
        }
        console.log("products",url);
        return res.data.data.data
      } catch (e) {
        console.log(e)
      }
    },
  }