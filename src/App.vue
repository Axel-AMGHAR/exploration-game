<template>
  <div>
    <div class="flex">
      <select-method v-model="method"></select-method>
      <my-input
        placeholder="Route"
        v-model="url"
    ></my-input>

      <button
          @click="request()"
          class="border-green-700 rounded p-2 px-4 bg-green-600 text-white font-bold uppercase"
      >Send</button>
    </div>
    <iframe v-if="isDecryptViewVisible" src="https://codesandbox.io/embed/reverent-sky-yelq4m?fontsize=14&hidenavigation=1&theme=dark"
            style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
            title="reverent-sky-yelq4m"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>
    <my-input
        placeholder="Token de connexion"
        v-model="token"
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
//import FindTreasure from "./components/base/FindTreasure.vue";
//import Coffre from './components/Coffre.vue';
import axios from 'axios'
import JsonText from "./components/base/JsonText.vue";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'

export default {
  name: "app",
  components: {
    // FirstStage,
    // SecondStage,
    // ThirdStage,
    MyInscription,
    MyInput,
    SelectMethod,
    //FindTreasure,
    //Coffre
    JsonText
  },
  data () {
    return {
      //stages: ['FirstStage', 'SecondStage', 'ThirdStage'],
      ports: ['', '8000', '7259'],
      currentPortIndex: 0,
      //currentView: 'MyInscription',
      isDecryptViewVisible: false,
      url: '',
      method: 'get',
      data: {},
      response: {},
      token: '',
      info: {
        "presentation": "Merci de venir explorer mon API (donjon) presque totalement RESTful.\n\nLe jeu est simple, vous naviguez dans le donjon pour trouver les 7 trésors qui y sont cachés.\n\nBonne exploration",
        "carte": [
          "/inscription",
          "/reset",
          "/escalier",
          "/coffre",
          "/1"
        ]
      }
    }
  },

  computed: {
    currentPort() {
      return this.ports[this.currentPortIndex]
    }
  },

  methods: {
    request () {
      axios({
        method: this.method,
        url: '/api/' + this.url,
        data: this.data
      }).then(response => {
        this.response = response.data
        console.log(this.response)
      })
    },
    goUp () {
      this.currentPortIndex++
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
