export const actions = {
    async fetchBrands() {
      try {
        const res = await this.$axios.$get(`/brands`);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
    async fetchBrandById({},brandId) {
      try {
        const res = await this.$axios.$get(`/brands/${brandId}`);
        return res.data;
      } catch (e) {
        console.log(e);
      }
    },
  };
  