<template>
  <h1>{{ title }}</h1>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: String,
    subTitle: String,
    date: Date,
    location: String
  },
})
export default class InnerItem extends Vue {
  title!: string;
}
</script>