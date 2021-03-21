<template>
  <div class="personal-details">
    <div class="details">
      <h1>Sibeesh Venu</h1>
      <h3>Software Engineer</h3>
      <p>
        More than 8 years of experience in Software Development, hands-on with a
        wide variety of technologies such as Azure Services, Azure DevOps, Azure
        IoT, Azure Functions, Asp.Net Core, Angular, and other Front-End
        technologies, SharePoint, Microsoft Flow, Docker, etc. I have experience
        in working with Monolithic, Microservices, and Cloud-Native
        Applications. Love to learn new technologies, implement them in
        projects, and write about them. Believer of “One who stops learning is
        old”. An engineer by profession and a writer by passion. Author of the
        book 'Asp Net Core and Azure with Raspberry Pi 4'
        (https://www.amazon.in/Asp-Net-Core-Azure-Raspberry-Applications/dp/1484264428).
        Microsoft MVP since 2016 and have written more than 500 blogs.
      </p>
    </div>
    <div class="img-container">
      <img src="" />
    </div>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
@Options({})
export default class PersonalDetails extends Vue {}
</script>
<style lang="scss" scoped>
.personal-details {
  background-color: #313c4e;
  padding: 50px;
  display: grid;
  grid-template-columns: 70% 30%;
  color: #ffffff;

  .img-container {
    border-color: #449399;
  }
}
</style>
