<script>
export default {
  name: "Input",
  data () {
    return {
      textinput: ''
    }
  },
  props: {
    nameInput: {
      type: String,
      default: undefined
    }
  }
}

</script>

<template>
  <input v-model="textinput" type="text" 
      class="form-text inputText mt-2 w-1/3
      block 
      rounded-md 
      border-gray-300 
      shadow-sm 
      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" :placeholder="nameInput">

</template>

<style scoped>

.inputText {
    margin: 10px;
}
</style>
