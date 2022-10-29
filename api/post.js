/* eslint-disable */

export default {
    async getPosts(axios) {
      try {
        let res
  
        if (axios) {
          res = await axios.get('/posts?paginate=3')
        } else {
          res = await $nuxt.$axios.get('/posts?paginate=3')
        }
        return res.data.data.data
      } catch (e) {
        console.log(e)
      }
    },
  }