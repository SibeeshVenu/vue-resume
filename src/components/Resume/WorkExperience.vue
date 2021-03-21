<template>
  <div class="work-experience">
    <Item title="Work Experience" :capitalLetter="true" />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Item from "../shared/Item.vue";
import { EmploymentHistory } from "../../models/employment-history";
@Options({
  components: {
    Item,
  },
  props: {
    workExperienceDetail: [],
  },
})
export default class WorkExperience extends Vue {
  workExperienceDetail!: EmploymentHistory[];
}
</script>