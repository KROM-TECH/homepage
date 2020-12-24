<template>
  <div>
    <membership-form :show="show_modal" @close="show_modal = !show_modal" />
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
          <a href="#" v-scroll-to="'#about'">
            <button href="" class="custom-btn btn-15">
              Learn More
            </button></a
          >

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

<style>
.img-fluid {
  max-width: 100%;
  height: auto;
}
.outline-text {
  -webkit-text-fill-color: #1e4196;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
.content-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-left: 5rem;
  animation: fadeInLeft 1s forwards;
}
.img-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fadeInRight 1s forwards;
}
span {
  cursor: pointer;
  display: inline;
  position: relative;
  transition: all 0.2s ease-in-out;
  display: block;
}

span:nth-child(2):hover {
  color: #4aacb8;
  top: 2px;
  left: 2px;
  text-shadow: 1px 1px #1b818d, 2px 2px #1b818d, 3px 3px #1b818d, 4px 4px #1b818d,
    4px 4px 5px rgba(0, 0, 0, 0.5);
}

span:nth-child(3):hover {
  color: #d13153;
  text-shadow: 1px 1px #83142c, 2px 2px #83142c, 3px 3px #83142c, 4px 4px #83142c, 5px 5px #83142c,
    6px 6px #83142c, 7px 7px #83142c, 8px 8px #83142c, 9px 9px 3px rgba(0, 0, 0, 0.5);
}
span:nth-child(7):hover {
  color: #d13153;
  text-shadow: 1px 1px #83142c, 2px 2px #83142c, 3px 3px #83142c, 4px 4px #83142c, 5px 5px #83142c,
    6px 6px #83142c, 7px 7px #83142c, 8px 8px #83142c, 9px 9px 3px rgba(0, 0, 0, 0.5);
}

span:hover {
  color: #acd335;
  text-shadow: 1px 1px #749218, 2px 2px #749218, 3px 3px #749218, 4px 4px #749218, 5px 5px #749218,
    6px 6px #749218, 7px 7px #749218, 8px 8px #749218, 9px 9px 3px rgba(0, 0, 0, 0.5);
  top: -2px;
  left: -2px;
  transition: all 0.1s ease-in-out;
}
h1 {
  font-size: 4rem;
}
</style>
