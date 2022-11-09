export const actions = {
  async fetchTranslations() {
    try {
      const res = await this.$axios.$get(`/translations`);
      return res.data;
    } catch (e) {
      console.log(e);
    }
  },
};
