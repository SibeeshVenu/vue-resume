<template>
  <div class="view">
    <Resume />
  </div>
</template>
<script lang="ts">
import Resume from "@/components/resume/Resume.vue";
import { Options, Vue } from "vue-class-component";
@Options({
  components: {
    Resume,
  },
})
export default class View extends Vue {}
</script>
