/* eslint-disable */

export default {
    async getSiteInfo(axios, url) {
      try {
        let res;
  
        if (axios) {
          res = await axios.get(`/site-info`);
        } else {
          res = await $nuxt.$axios.get(`/site-info`);
        }
        console.log("siteinfo", res.data);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
  };
  