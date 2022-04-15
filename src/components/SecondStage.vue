<template>
  <div class="flex justify-around">
    <card
        v-for="(action, index) of actions"
        :key="index"
        class="basis-1/6"
        @click="call(action.name)"
    >{{ action.name }}</card>
  </div>
</template>

<script>
import Card from "./base/Card.vue";
import axios from 'axios'

export default {
  name: "SecondStage",
  components: {
    Card
  },
  data () {
    return {
      actions: [{
        name: 'inscription'
      },{
        name: 'escalier'
      },{
        name: 'vieux'
      },{
        name: 'note'
      }, {
        name: 'couloir'
      },
      ]
    }
  },

  methods: {
    call (name) {
      switch (name) {
        case 'inscription':
          this.$parent.currentView = 'MyInscription'
          break
        case 'escalier':
          this.$emit('goUp')
          break
      }
    },
  }
}
</script>

<style scoped>

</style>