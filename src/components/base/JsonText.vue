<template>
    <div class="flex flex-row w-screen-lg overflow-x-hidden">
        <div class="basis-full bg-slate-800 text-white text-left">
            <pre class="flex flex-col">
                <div v-for="(final, index) in finalJson" :key="index">
                    {{ final }} 
                </div>
            </pre>
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
          console.log("dedans");
          
          return (JSON.stringify(this.jsonText, null, '\t')).split('\n\n');
      }
  }
}
</script>

<style scoped>

</style>