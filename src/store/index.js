import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonList: [],
    selectedPokemon: undefined,
  },
  getters: {
    getPokemon(state) {
      return state.pokemonList;
    },
    getSelectedPokemon(state) {
      return state.selectedPokemon;
    },
  },
  mutations: {
    SET_POKEMON_LIST(state, data) {
      state.pokemonList = data;
    },
    SET_SELECTED_POKEMON(state, data) {
      state.selectedPokemon = data;
    },
  },
  actions: {
    async fetchPokemonList({ commit }) {
      try {
        const pokemonListRes = await fetch(
          "https://pokeapi.co/api/v2/pokemon/?limit=99"
        );
        const pokemonData = await pokemonListRes.json();
        commit("SET_POKEMON_LIST", pokemonData);
      } catch (error) {
        console.log(error);
      }
    },
    async selectPokemon({ commit }, pokemon) {
      try {
        const selectedPokemonRes = await fetch(`${pokemon.url}`);
        const selectedPokemonData = await selectedPokemonRes.json();
        commit("SET_SELECTED_POKEMON", selectedPokemonData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
