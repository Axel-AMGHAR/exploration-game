<template>
  <div class="flex justify-around">
    <card
        v-for="(action, index) of actions"
        :key="index"
        class="basis-1/5"
        @click="call(action.name)"
    >{{ action.name }}</card>
  </div>
</template>

<script>
import Card from "./base/Card.vue";
import axios from 'axios'

export default {
  name: "FirstStage",
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
        name: 'coffre'
      },{
        name: '1'
      },
      ]
    }
  },

  methods: {
    call (name) {
      switch (name) {
        case 'inscription':
          this.inscription()
          break
        case 'escalier':
          this.$emit('goUp')
          break
        case 'coffre':
          this.coffre()
          break
        case '1':
          this.first()
          break

      }
    },
    inscription () {
      this.$parent.currentView = 'MyInscription'
    },
    first() {
      this.$parent.currentView = 'FindTreasure'
    },
    goUp() {

    },
    coffre() {
      this.$parent.currentView = 'Coffre'
    }
  },
/*  props: {
    actions: {
      type: Object,
      required: true
    }
  },*/
  created() {

  }
}
</script>

<style scoped>

</style>