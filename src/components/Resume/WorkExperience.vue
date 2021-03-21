<template>
  <div class="work-experience">
    <Item title="Work Experience" :capitalLetter="true" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Item from "../Shared/Item.vue";
@Options({
  components: {
    Item,
  },
})
export default class WorkExperience extends Vue {}
</script>