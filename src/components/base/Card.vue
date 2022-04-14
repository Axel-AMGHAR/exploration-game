<template>
  <div class="border-2 border-black rounded">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
