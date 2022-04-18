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
      class="form-text inputText w-1/3
      mx-2
      block 
      rounded-md 
      border-gray-300 
      shadow-sm 
      focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  />
</template>
