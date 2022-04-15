<template>
    <div class="absolute top-15 right-10">
        <div class="border-4 rounded-md border-green-500 shadow-sm bg-slate-800 text-white text-left h-auto p-5">
        <span>Trésors trouvés : {{ count }} / 7</span>
        </div>
    </div>
</template>

<script>
export default {
  name: "MyReset",
  props: {
      count: Number
  },
}
</script>

<style scoped>

</style>