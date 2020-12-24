<template>
  <section class="bg-projects p-5 p-md-1">
    <h2 class="about-heading text p-2">Projects</h2>
    <div class="about-content">
      <p class="px-8 px-md-1" style="font-weight: 600">
        Below is a collection of all our services. <br />
        <i style="color:#5a564d"
          >If you want a new feature added to any services or notice something isn't right you can
          drop your thoughts in the
          <a href="#" style="color: #677bb5">form</a>
          below</i
        >
      </p>
      <div class="pt-2 flex">
        <div class="project">
          <div class="project-img">
            <img src="@/assets/logos/kaa.svg" alt="" />
          </div>
          <div class="project-content">
            <h4>KAA</h4>

            <div class="content">
              <p>
                KAA is a not-for-profit platform that seeks to reduce the stress it take to find
                academic materials in african universities today
              </p>
            </div>
            <a href="http://kaa.kromtech.io" target="_blank">
              <button class="custom-btn btn-15">
                View Site
              </button>
            </a>
          </div>
        </div>

        <div class="project">
          <div class="project-img">
            <img src="@/assets/logos/studee.svg" alt="" />
          </div>
          <div class="project-content">
            <h4>Studee</h4>

            <div class="content">
              <p>
                The purpose of Studee is to incorporate all spheres of student activities into a
                single application ranging from commerce to time Management
              </p>
            </div>
            <a href="http://studee.kromtech.io" target="_blank">
              <button class="custom-btn btn-15">
                View Site
              </button>
            </a>
          </div>
        </div>

        <div class="project">
          <div class="project-img">
            <img src="@/assets/logos/brainbox.svg" alt="" />
          </div>
          <div class="project-content">
            <h4>BrainBox</h4>

            <div class="content">
              <p>
                BrainBox was created to grant students a form of financial independence and it does
                this using quizzes and game, check the site to find out more
              </p>
            </div>
            <a href="http://brainbox.kromtech.io" target="_blank">
              <button class="custom-btn btn-15">
                View Site
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionFour",
};
</script>

<style scoped>
.project {
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 2px 3px black;
  background-color: #fff;
  border: 1px solid;
}
.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
}

.project-img {
  border-bottom: 1px solid rgba(70, 63, 63, 0.578);
  width: 100%;
}
h4 {
  font-size: 29px;
  padding: 10px;
  color: #1e4196;
}
img {
  height: 150px;
  width: 150px;
  padding: 10px;
}
.project {
  max-width: 270px;
  margin: 10px;
}

.about-content {
  display: flex;
  flex-direction: column;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
