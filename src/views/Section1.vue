<template>
  <div>
    <membership-form v-if="show_modal" @close="show_modal = !show_modal" />
    <section class="bg">
      <div class="col-50 content-center ">
        <!-- Heading -->
        <h1 class="text outline-text text-md">
          <p class="p-1">
            <span>Built</span>
            <span>for students,</span>

            <span>by students,</span>

            <span>with students</span>
          </p>
        </h1>
        <!-- Text -->
        <p class="h3 p-1">Using technology to build a better educational system</p>
        <!-- Buttons -->
        <div class="pt-1 p-1 btn-md">
          <button
            href=""
            class="custom-btn btn-15"
            @click="$router.push({ name: 'Home', hash: '#about' })"
          >
            Learn More
          </button>
          <button class="custom-btn btn-15" @click="show_modal = !show_modal">
            Become a Member
          </button>
        </div>
      </div>

      <div class="bg-white col-50 img-center ">
        <!-- Image -->
        <img src="@/assets/logo.jpeg" class="img-fluid" alt="..." />
      </div>
    </section>
  </div>
</template>

<script>
import MembershipForm from "../components/MembershipForm.vue";
export default {
  components: { MembershipForm },
  name: "sectionOne",
  data() {
    return {
      show_modal: "false",
    };
  },
  methods: {
    scroll() {
      const about = window;
      console.log(about);
      about.pageYOffset = 700;
    },
  },
  created() {
    this.show_modal = false;
  },
};
</script>

<style></style>
