/* eslint-disable */

export default {
    async getCategories(axios) {
      try {
        let res
  
        if (axios) {
          res = await axios.get('/categories')
        } else {
          res = await $nuxt.$axios.get('/categories')
        }
        console.log("categories",res.data.data);
        return res.data.data.data
      } catch (e) {
        console.log(e)
      }
    },
  }