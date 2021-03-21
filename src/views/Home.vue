<template>
  <div class="home">
    <CodeEditor />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CodeEditor from "@/components/CodeEditor.vue"; // @ is an alias to /src

@Options({
  components: {
    CodeEditor,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss" scoped>
.home {
  padding-left: 50px;
  padding-right: 50px;
}
</style>
