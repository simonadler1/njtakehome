<template>
  <div id="app">
    <v-list-item-group v-model="selectedSpecies" color="primary">
      <v-list-item v-for="(item, i) in getSpecies" :key="i">
        <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: {},
  created() {
    this.fetchSpecies;
  },
  data() {
    return {
      selectedSpecies: undefined,
    };
  },
  computed: {
    ...mapGetters(["getSpecies"]),
  },
  methods: {
    ...mapActions(["fetchSpecies"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
