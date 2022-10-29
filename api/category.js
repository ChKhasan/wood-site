/* eslint-disable */

export default {
    async getCategories(axios) {
      try {
        let res
  
        if (axios) {
          res = await axios.get('/categories?paginate=3')
        } else {
          res = await $nuxt.$axios.get('/categories?paginate=3')
        }
        return res.data.data
      } catch (e) {
        console.log(e)
      }
    },
  }