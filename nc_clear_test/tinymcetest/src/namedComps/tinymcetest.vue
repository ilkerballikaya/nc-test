<template>
  <div>
    <tinymce id="d1" v-model="data"></tinymce>
    <button type="button" @click="resetClickHandler">Reset</button>
    <button type="button" @click="contentClickHandler">SetContent</button>
    <div>{{ data }}</div>
  </div>
</template>


<script lang="ts">
import { Vue } from "vue/types/vue";
import { ThisTypedComponentOptionsWithRecordProps } from "vue/types/options";
import tinymce from '../external/TinymceVue.vue'
const intellisense: <D, M, C, P>(
  x: ThisTypedComponentOptionsWithRecordProps<Vue, D, M, C, P>
) => void = (x) => x;

export default intellisense({
  name: "tinymcetest",
  components: {
    tinymce
  },
  data() {
    return {
          data : '',
      };
  },
  methods: {
    resetClickHandler(){
      console.log(this.data)
      this.data = "";        
    },
    contentClickHandler(){
      this.data += " asdasdasdasdas";
      console.log(this.data)
    }
  }
});
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>