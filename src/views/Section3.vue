<template>
  <section class="bg-members p-5 p-md-1">
    <h2 class="about-heading text p-2">Members</h2>
    <div class="about-content">
      <p class="px-8 px-md-1" style="font-weight: 600">
        We are rapidly growing and hence recuiting members in various universities <br />
        Below are some universities where we have members
        <i>click on universities to view members</i>
        <br />
        If you would love to work with us and officially become a member,
        <a href="#" style="color: #677bb5">click here</a>
      </p>
      <div class="chapters pt-2">
        <div class="uni">university of Lagos</div>
        <div class="uni">university of Ibadan</div>
        <!-- <div class="uni">university of Benin</div> -->
        <div class="uni">Obafemi Awolowo University</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionThree",
};
</script>

<style>
.bg-members {
  background-image: url("../assets/map.jpg");
  background-color: white;
  /* background-attachment: fixed; */
  background-size: 50rem auto;
  height: auto;
}

.chapters {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, 15rem);
  justify-content: center;
}
.uni {
  background-color: #174971;
  background-image: linear-gradient(to bottom right, #4ba0e4, #1b2a4e61);
  padding: 1rem;
  height: 1.9rem;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.uni:hover {
  box-shadow: 1px 2px 3px black;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #f15b6c, #174971);
  border: 1px solid white;
}
</style>
