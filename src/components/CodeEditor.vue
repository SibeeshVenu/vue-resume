<template>
  <div class="hello">
    <prism-editor
      class="code-editor"
      v-model="code"
      :highlight="highlighter"
      line-numbers
    ></prism-editor>
  </div>
</template>

<script lang="ts">
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)

import { highlight, languages } from "prismjs/components/prism-core"
import "prismjs/components/prism-javascript";

export default {
  components: {
    PrismEditor,
  },
  data: () => ({ code: "Start creating your resume in JSON here" }),
  methods: {
    highligher(code: string) {
      return highlight(code, languages.js);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* required class */
  .code-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;

    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }

  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }

</style>
