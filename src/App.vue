<template>
  <div class="p-8">
    <div class="flex">
      <select
          v-model="currentStageIndex"
          class="selectMethod block
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                mx-2"
      >
        <option value="">Etage</option>
        <option value="0">Etage 1</option>
        <option value="1">Etage 2</option>
        <option value="2">Etage 3</option>
      </select>
      <select-method v-model="method"></select-method>
      <my-input
        placeholder="Route"
        v-model="url"
        @keyup.enter="request()"
    ></my-input>

      <button
          @click="request()"
          class="bg-slate-800 border-4 rounded p-2 px-4 border-blue-800 text-white font-bold uppercase"
      >Send</button>
      <my-reset
          v-if="token !== ''"
          :count="numberTreasures"
      ></my-reset>
    </div>

    <div>
    <label
        for="token"
        class="ml-2"
    >Token :</label>
    <my-input
        placeholder="Token de connexion"
        v-model="token"
        id="token"
    ></my-input>
    </div>

    <div class="flex">
      <json-text
          class="basis-3/4 mx-2"
          :jsonText="response"
      >Response</json-text>
      <json-text
          class="basis-1/4 mx-2"
          :jsonText="headers"
      >Headers</json-text>
    </div>

    <iframe v-if="isDecryptViewVisible" src="https://codesandbox.io/embed/reverent-sky-yelq4m?fontsize=14&hidenavigation=1&theme=dark"
            style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
            title="reverent-sky-yelq4m"
            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    ></iframe>

  </div>
</template>

<script>
import MyInscription from "./components/MyInscription.vue";
import MyInput from "./components/base/MyInput.vue";
import SelectMethod from "./components/SelectMethod.vue";
import JsonText from "./components/base/JsonText.vue";
import MyReset from "./components/MyReset.vue";
import axios from 'axios'
//axios.defaults.headers.options['Access-Control-Allow-Headers'] = 'origin, x-requested-with'
//axios.defaults.headers.options['Access-Control-Request-Methods'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = '*'
axios.defaults.headers.common['Accept'] = '*/*'

export default {
  name: "app",
  components: {
    // FirstStage,
    // SecondStage,
    // ThirdStage,
    MyInscription,
    MyInput,
    SelectMethod,
    JsonText,
    MyReset
  },
  data () {
    return {
      numberTreasures: 0,
      ports: ['firstStage', 'secondStage', 'thirdStage'],
      currentStageIndex: 0,
      isDecryptViewVisible: false,
      url: '',
      method: 'get',
      data: {},
      response: {},
      token: '',
      headers: {}
    }
  },

  computed: {
    currentStage() {
      return this.ports[this.currentStageIndex]
    }
  },

  methods: {
    request () {
      axios({
        method: this.method,
        url: '/' + this.currentStage + '/' + this.url,
        data: this.data,
        headers: {
          'x-auth-token': this.token,
        }
      }).then(response => {
        console.log(response)
        this.response = response.data
        this.headers = response.headers
        axios.get('/' + this.currentStage + '/reset', {
          headers: {
            'x-auth-token': this.token,
          }
        }).then(response => this.numberTreasures = response.data.retreived_tresors.length)

        console.log(this.url)
        if(this.url === 'coffre')
          this.isDecryptViewVisible = true
      }).catch(error => {
        this.response = 'Il vous faut une clé pour rentrer.'
      })
    },
    goUp () {
      this.currentStageIndex++
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
