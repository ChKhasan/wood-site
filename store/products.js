export const actions = {
  async fetchProductsPaginate() {
    try {
      const res = await this.$axios.$get(`/products?paginate=18`);
      return res.data.data;
    } catch (e) {
      console.log(e);
    }
  },
  async fetchProductByParams({},fullPage) {
    try {
      const res = await this.$axios.$get(`${fullPage}&paginate=12`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
  async fetchProductBySlug({},slug) {
    try {
      const res = await this.$axios.$get(`/products/${slug}`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
