<template>
  <prism-editor
    v-on:blur="submit"
    class="my-editor"
    v-model="code"
    :highlight="highlighter"
    line-numbers
  ></prism-editor>
</template>
<script>
import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "vue-prism-editor/dist/prismeditor.min.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
export default {
  components: {
    PrismEditor,
  },
  data: () => ({
    code:
      "Start editing your resume in JSON format here, rest we will take care!",
  }),
  methods: {
    submit() {
      console.log(this.code);
    },
    highlighter(code) {
      return highlight(code, languages.js);
    },
  },
};
</script>

<style>
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
}
.prism-editor__textarea:focus {
  outline: none;
}
</style>