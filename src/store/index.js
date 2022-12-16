import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    speciesList: [],
    selectedSpecies: undefined,
  },
  getters: {
    getSpecies(state) {
      return state.speciesList;
    },
    getSelectedSpecies(state) {
      return state.selectedSpecies;
    },
  },
  mutations: {},
  actions: {
    async fetchSpecies({ commit }) {
      try {
        const fishSpeciesRes = await fetch(
          "https://www.fishwatch.gov/api/species"
        );
        const fishSpeciesData = await fishSpeciesRes.json();
        commit("SET_SPECIES_LIST", fishSpeciesData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
