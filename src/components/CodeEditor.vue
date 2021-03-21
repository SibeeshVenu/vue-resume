<template>
  <prism-editor
    @blur="submit()"
    class="my-editor"
    v-model="code"
    :highlight="highlighter"
  ></prism-editor>
</template>

<script lang="ts">
import { PrismEditor } from "vue-prism-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "vue-prism-editor/dist/prismeditor.min.css";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-json";
import "prismjs/themes/prism-tomorrow.css";
import { Options, Vue } from "vue-class-component";
import { useStore } from "../store";

@Options({
  components: {
    PrismEditor,
  },
  data: () => ({
    code: useStore().state.resumeContent,
  }),
  methods: {
    submit() {
      this.$store.state.resumeContent = this.code;
    },
    highlighter(code: string) {
      return highlight(code, languages.json);
    },
  },
})
export default class CodeEditor extends Vue {
}
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