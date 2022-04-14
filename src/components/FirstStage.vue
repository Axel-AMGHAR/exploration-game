<template>
  <card v-for="(action, index) of actions">{{ action.name }}</card>
</template>

<script>
import Card from "./base/Card";

export default {
  name: "FirstStage",
  components: {
    Card
  },
  props: {
    actions: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>