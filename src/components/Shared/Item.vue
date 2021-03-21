<template>
  <div class="item">
    <h1>{{ capitalLetter ? title.toUpperCase() : title }}</h1>
    <InnerItem
      title="Software Engineer"
      subTitle="Sibeesh Passion"
      date="21/03/2021 - Present"
      location="Pforzheim, Germany"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import InnerItem from "./InnerItem.vue";

@Options({
  components: {
    InnerItem,
  },
  props: {
    title: String,
    capitalLetter: Boolean,
  },
})
export default class Item extends Vue {
  title!: string;
  capitalLetter!: boolean;
}
</script>

<style lang="scss" scoped>
.item {
  display: grid;
  gap: 5px;
  width: 40%;
  grid-template-rows: 62px auto;
  h1 {
    color: #449399;
    text-underline-position: under;
    text-decoration: underline;
  }
}
</style>