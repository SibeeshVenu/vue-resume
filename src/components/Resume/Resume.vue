<template>
  <div>{{ title }}</div>
  <PersonalDetails />
  <SocialLinks />
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import PersonalDetails from "./PersonalDetails.vue";
import SocialLinks from "./SocialLinks.vue";
@Options({
  components: {
    PersonalDetails,
    SocialLinks,
  },
  data: () => ({
    title: "Resume",
  }),
})
export default class Resume extends Vue {}
</script>