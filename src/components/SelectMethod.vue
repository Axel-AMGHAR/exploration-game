<script>
export default {
    name: "SelectMethod",
  props: {
    modelValue: String
  },

    data() {
        return {

        }
    }
}
</script>

<template>
    <select
        @change="$emit('update:modelValue', $event.target.value)"
        :value="modelValue"
        class="selectMethod block
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mx-2"
    >
        <option value=""> Methodes </option>
        <option value="get"> GET </option>
        <option value="put"> PUT </option>
        <option value="post"> POST </option>
        <option value="patch"> PATCH </option>
        <option value="delete"> DELETE </option>
        <option value="options"> OPTIONS </option>
    </select>
</template>
