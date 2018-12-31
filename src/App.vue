<template>
  <div id="app">
    <img alt="SPECIAL logo" src="./assets/SPECIAL.png">
    <Character/>
  </div>
</template>

<script>
import Character from "./components/Character.vue";

export default {
  name: "app",
  components: {
    Character
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
