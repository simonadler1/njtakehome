<template>
  <v-card height="50vh" class="overflow-y-auto">
    <div v-if="!getSelectedPokemon">Select A Pokemon To Get Started!</div>
    <div v-else>
      <v-img
        width="200"
        height="175"
        :src="getSelectedPokemon.sprites.front_default"
      ></v-img>
      <v-card-title> Name:{{ getSelectedPokemon.name }}</v-card-title>
      <v-card-title> Height: {{ getSelectedPokemon.height }} </v-card-title>
      <v-card-title> Weight: {{ getSelectedPokemon.weight }} </v-card-title>
      <v-card-text v-if="getSelectedPokemon.location"
        >Location: {{ getSelectedPokemon.location }}</v-card-text
      >
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getSelectedPokemon"]),
  },
};
</script>

<style></style>
