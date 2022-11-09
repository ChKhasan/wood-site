export const state = () => ({
  lang: localStorage.getItem("Lang"),
});
export const mutations = {
  langRu(state, payload) {
    localStorage.setItem("Lang", payload);
    state.lang = localStorage.getItem("Lang");
  },
};
export const actions = {
  actionLangRu({ commit }, payload) {
    commit("langRu", payload);
  },
};
export const getters = {
  language(state) {
    return state.lang;
  },
};
