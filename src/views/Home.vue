<template>
  <div class="home">
    <CodeEditor />
    <Resume />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src
import Resume  from "@/components/Resume/Resume.vue";

@Options({
  components: {
    CodeEditor,
    Resume
  },
})
export default class Home extends Vue {}
</script>
