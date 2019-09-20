<template>
  <v-app>
    <v-content>
      <v-toolbar app>
        <v-toolbar-side-icon>
          <v-img alt="SPECIAL" max-height="100" src="SPECIAL.png">
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
          </v-img>
        </v-toolbar-side-icon>
        <v-toolbar-title class="headline text-uppercase">S-P-E-C-I-A-L</v-toolbar-title>
      </v-toolbar>
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">Intro</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">questions</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3">result</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card class="mb-5" color="lighten-1" height="200px">Welcome to S-P-E-C-I-A-L test!
              <v-img alt="SPECIAL" max-height="100" min-height="25vh" src="SPECIAL.png"/>
            </v-card>

            <v-btn color="primary" @click="e1 = 2">Continue</v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-5" color="grey lighten-1" height="200px">
              <Character/>
            </v-card>

            <v-btn color="primary" @click="e1 = 3">Continue</v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card class="mb-5" color="grey lighten-1" height="200px">Finish!</v-card>

            <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

            <v-btn flat>Cancel</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-content>
  </v-app>
</template>

<script>
import Character from './components/Character.vue';

export default {
  name: 'app',
  components: {
    Character,
  },
  data: function() {
    return {
      e1: 1,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
