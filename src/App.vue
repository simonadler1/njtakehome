<template>
  <v-app>
    <v-main id="app">
      <v-container>
        <v-row
          ><v-col cols="3"><Picker /></v-col>
          <v-col cols="8"><ViewDetails /></v-col> </v-row
      ></v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Picker from "./components/Picker.vue";
import ViewDetails from "./components/ViewDetails.vue";
export default {
  name: "App",
  components: { Picker, ViewDetails },
  created() {
    this.fetchPokemonList();
  },
  methods: {
    ...mapActions(["fetchPokemonList"]),
  },
};
</script>
