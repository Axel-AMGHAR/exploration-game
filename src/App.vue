<template>
  <div>
    <div class="flex">
      <select-method></select-method>
      <my-input placeholder="Route"></my-input>
    </div>
    <iframe v-if="isDecryptViewVisible" src="https://codesandbox.io/embed/reverent-sky-yelq4m?fontsize=14&hidenavigation=1&theme=dark"
            style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
            title="reverent-sky-yelq4m"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
    <my-input
        placeholder="Token de connexion"
    ></my-input>

<!--    <component
        :is="currentStage"
        @go-up="goUp()"
        @change-current-view="view => changeCurrentView(view)"
    ></component>
    <component :is="currentView"></component>-->
  </div>
</template>

<script>
// import FirstStage from "./components/FirstStage.vue";
// import SecondStage from "./components/SecondStage.vue";
// import ThirdStage from "./components/ThirdStage.vue";
import MyInscription from "./components/MyInscription.vue";
import MyInput from "./components/base/MyInput.vue";
import SelectMethod from "./components/SelectMethod.vue";
import FindTreasure from "./components/base/FindTreasure.vue";
 

export default {
  name: "app",
  components: {
    // FirstStage,
    // SecondStage,
    // ThirdStage,
    MyInscription,
    MyInput,
    SelectMethod,
    FindTreasure
  },
  data () {
    return {
      //stages: ['FirstStage', 'SecondStage', 'ThirdStage'],
      stages: ['', '8000', '7259'],
      currentStageIndex: 0,
      //currentView: 'MyInscription',
      isDecryptViewVisible: false
    }
  },

  computed: {
    currentStage () {
      return this.stages[this.currentStageIndex]
    }
  },

  methods: {
    goUp () {
      this.currentStageIndex++
    },
/*    changeCurrentView (view) {
      this.currentView = view
    }*/
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
