import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerImage: "hero-banner.jpg"
  },
  mutations: {
    CHANGE_HEADER_IMAGE: (state, image) => {
      state.headerImage = image;
    }
  },
  actions: {}
});
