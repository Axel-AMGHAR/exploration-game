<template>
  <div>
    <div class="flex">
      <select-method></select-method>
      <my-input placeholder="Route customisée"></my-input>
    </div>
   
    <my-input
        placeholder="Token de connexion"
        v-model="testA"
    ></my-input>
   

    <component :is="currentStage" @goUp="goUp()"></component>
    <!--  {{ currentView}}-->
    <component :is="currentView"></component>
  </div>
</template>

<script>
import FirstStage from "./components/FirstStage.vue";
import MyInscription from "./components/MyInscription.vue";
import MyInput from "./components/base/MyInput.vue";
import SelectMethod from "./components/SelectMethod.vue";
import FindTreasure from "./components/base/FindTreasure.vue";
 

export default {
  name: "app",
  components: {
    FirstStage,
    MyInscription,
    MyInput,
    SelectMethod,
    FindTreasure
  },
  data () {
    return {
      currentStage: 'FirstStage',
      currentView: 'MyInscription',
      testA: ''
    }
  },
  updated () {
    console.log('this.test')
    console.log(this.testA)
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
