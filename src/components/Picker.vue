<template>
  <v-card class="overflow-y-auto" height="50vh">
    <v-list>
      <v-list-item-group v-model="selectedPokemon" color="primary">
        <v-list-item v-for="(item, idx) in getPokemon.results" :key="idx">
          <v-list-item-content @click="selectPokemon(item)">
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item> </v-list-item-group></v-list
  ></v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      selectedPokemon: undefined,
    };
  },
  computed: {
    ...mapGetters(["getPokemon"]),
  },
  methods: {
    ...mapActions(["selectPokemon"]),
  },
};
</script>

<style></style>
