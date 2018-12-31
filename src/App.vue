<template>
  <div id="app">
    <img alt="SPECIAL logo" :src="logo">
    <Character/>
  </div>
</template>

<script>
import Character from "./components/Character.vue";
import specialLogo from "./assets/SPECIAL.png";

export default {
  data: function() {
    return {
      logo: specialLogo
    };
  },
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
