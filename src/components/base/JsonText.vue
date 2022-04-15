<template>
    <div class="flex flex-row w-screen-lg overflow-x-hidden">
        <div class="basis-full bg-slate-800 text-white text-left">
            <div class="p-5">
                <pre class="flex flex-col">
                    <span  v-for="(final, index) in finalJson" :key="index">
                        {{ final }} 
                    </span>
                </pre>
            </div>
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
          
          return (JSON.stringify(this.jsonText, null, 2)).split('\\n\\n');
      }
  }
}
</script>

<style scoped>

</style>