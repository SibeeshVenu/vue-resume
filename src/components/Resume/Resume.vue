<template>
  <div class="resume">
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
import { ResumeContent } from "../../models/resume-content";
@Options({
  components: {
    PersonalDetails,
    SocialLinks,
    WorkExperience,
  },
})
export default class Resume extends Vue {
  mounted() {
    const store = useStore();
    const resumeContent: ResumeContent = JSON.parse(store.state.resumeContent);
    console.log(resumeContent);
  }
}
</script>

<style lang="scss" scoped>
.resume {
  padding-left: 50px;
  padding-right: 50px;
  text-align: left;
}
</style>
