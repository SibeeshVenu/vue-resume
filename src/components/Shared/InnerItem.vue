<template>
  <div class="inner-item">
    <h2 class="title">{{ title }}</h2>
    <h3 class="subtitle">{{ subTitle }}</h3>
    <span class="date">{{ date }}</span>
    <span class="location">{{ location }}</span>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: {
    title: String,
    subTitle: String,
    date: String,
    location: String,
  },
})
export default class InnerItem extends Vue {
  title!: string;
  subTitle!: string;
  date!: string;
  location!: string;
}
</script>

<style lang="scss" scoped>
.inner-item {
  display: grid;
  gap: 5px;
  grid-template-rows: repeat(3, 50px);
  grid-template-columns: 70%;
  .title {
    grid-area: 1/1;
  }
  .subtitle {
    grid-area: 2/1;
  }
  .date {
    grid-area: 3/1;
    color: #449399;
  }
  .location {
    text-align: right;
    grid-area: 3/2;
    font-style: italic;
    color: #449399;
  }
}
</style>