<template>
  <div>
  <component :is="currentStage"></component>
<!--  {{ currentView}}-->
  <component :is="currentView"></component>
  </div>
</template>

<script>
import FirstStage from "./components/FirstStage.vue";
import MyInscription from "./components/MyInscription.vue";

export default {
  name: "app",
  components: {
    FirstStage,
    MyInscription
  },
  data () {
    return {
      currentStage: 'FirstStage',
      currentView: 'MyInscription',
    }
  }
}
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
