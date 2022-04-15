<template>
  <div>
    <div class="flex">
      <component :is="currentMethod"></component>
      <component :is="customPathInput" nameInput="Route customisée"></component>
    </div>
   
    <component :is="tokenInput" nameInput="Token de connexion"></component>
   

    <component :is="currentStage" @goUp="goUp()"></component>
    <!--  {{ currentView}}-->
    <component :is="currentView"></component>
  </div>
</template>

<script>
import FirstStage from "./components/FirstStage.vue";
import MyInscription from "./components/MyInscription.vue";
import Input from "./components/base/Input.vue";
import SelectMethod from "./components/SelectMethod.vue";
import FindTreasure from "./components/base/FindTreasure.vue";
 

export default {
  name: "app",
  components: {
    FirstStage,
    MyInscription,
    Input,
    SelectMethod,
    FindTreasure
  },
  data () {
    return {
      currentStage: 'FirstStage',
      currentView: 'MyInscription',
      currentMethod: 'SelectMethod',
      tokenInput: 'Input',
      customPathInput: 'Input'
    }
  },

  methods () {

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
