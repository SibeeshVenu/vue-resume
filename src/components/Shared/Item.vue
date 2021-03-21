<template>
  <h1>{{ title }}</h1>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: String,
  },
})
export default class Item extends Vue {
  title!: string;
}
</script>