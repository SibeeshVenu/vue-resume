<template>
  <div class="resume">
    <div>{{ title }}</div>
    <PersonalDetails />
    <SocialLinks />
    <WorkExperience />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import PersonalDetails from "./PersonalDetails.vue";
import SocialLinks from "./SocialLinks.vue";
import WorkExperience from "./WorkExperience.vue";
import { useStore } from "../../store";

@Options({
  components: {
    PersonalDetails,
    SocialLinks,
    WorkExperience,
  },
  data: () => ({
    title: "Resume",
  }),
})
export default class Resume extends Vue {
  mounted() {
    const store = useStore();
    console.log(JSON.stringify(store.state.resumeContent));
  }
}
</script>

<style lang="scss" scoped>
.resume {
  border: 1px solid;
  padding-left: 50px;
  padding-right: 50px;
  text-align: left;
}
</style>