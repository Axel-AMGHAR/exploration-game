<script>
export default {
  name: "MyInput",
  props: {
    modelValue: {
      type: String
    }
  }
}

</script>

<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      type="text"
      class="form-text inputText mt-2 w-1/3
      block 
      rounded-md 
      border-gray-300 
      shadow-sm 
      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  />
</template>

<style scoped>

.inputText {
    margin: 10px;
}
</style>
