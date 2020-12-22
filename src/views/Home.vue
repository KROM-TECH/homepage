<template>
  <main>
    <Menu />
    <sectionOne />
    <sectionTwo />
    <sectionThree />
    <sectionFour />
    <sectionFive />
  </main>
</template>

<script>
import Menu from "@/components/Menu";
import SectionOne from "./Section1";
import SectionTwo from "./Section2";
import SectionThree from "./Section3";
import SectionFour from "./Section4";
import SectionFive from "./Section5";
export default {
  components: {
    Menu,
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
  },
};
</script>

<style></style>
