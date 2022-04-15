<script>
export default {
    name: "SelectMethod",
    data() {
        return {
            selected: ''
        }
    }
}
</script>

<template>
    <select v-model="selected" class="selectMethod block
                mt-1 
                rounded-md
                border-gray-300
                shadow-sm
                focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option value=""> Methodes </option>
        <option value="get"> GET </option>
        <option value="put"> PUT </option>
        <option value="post"> POST </option>
        <option value="patch"> PATCH </option>
        <option value="delete"> DELETE </option>
        <option value="options"> OPTIONS </option>
    </select>
</template>

<style scoped>
.selectMethod {
    margin: 10px;
}
</style>
