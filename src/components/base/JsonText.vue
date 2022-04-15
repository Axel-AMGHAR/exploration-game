<template>
    <div class="flex flex-row">
        <div class="basis-full bg-slate-800 text-white text-left">
            <pre class="p-5">{{ finalJson }}</pre>
        </div>
    </div>
</template>

<script>
export default {
  name: 'JsonText',
  props: {
      jsonText: Object
  },
  data() {
      return {
          finalJson: '',
      }
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