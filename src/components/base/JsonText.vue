<template>
  <div>
    <div class="text-2xl text-bold my-4">
    <slot></slot>
    </div>
        <div class="border-4 rounded-md border-blue-800 shadow-sm bg-slate-800 text-white text-left">
            <pre class="p-5">{{ finalJson }}</pre>
        </div>
  </div>
</template>

<script>
export default {
  name: 'JsonText',
  props: {
      jsonText: [Object, String]
  },
  computed: {
      finalJson() {
          return JSON.stringify(this.jsonText, null, 2).split('\\n\\n').join('\n ');
      }
  }
}
</script>

<style scoped>

</style>