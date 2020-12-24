<template>
  <section class="bg-white">
    <h2 class="about-heading text p-2">Contact</h2>
    <div class="contact-flex">
      <div class="social col-50">
        <div class="row1">
          <a href="mailto:kromatictech@mail.com"
            ><div class="card mail">
              <h3>Mail</h3>
            </div></a
          >
        </div>
        <div class="row2">
          <a href="https://web.facebook.com/kromtech1">
            <div class="card facebook">
              <h3>Facebook</h3>
            </div>
          </a>
          <a href="https://instagram.com/kromtech__24">
            <div class="card instagram">
              <h3>Instagram</h3>
            </div>
          </a>
          <a href="https://twitter.com/kromtech_1"
            ><div class="card twitter">
              <h3>Twitter</h3>
            </div></a
          >
        </div>
        <div class="row3">
          <a href="https://wa.me/2348146923944"
            ><div class="card whatsapp">
              <h3>Whatsapp</h3>
            </div></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SectionFive",
};
</script>

<style>
.social {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mail {
  border: 1px solid #b23121;
  color: #b23121;
}
.twitter {
  border: 1px solid #00acee;
  color: #00acee;
}
.facebook {
  border: 1px solid #3b5998;
  color: #3b5998;
}
.instagram {
  border: 1px solid #3f729b;
  color: #3f729b;
}
.whatsapp {
  border: 1px solid #25d366;
  color: #25d366;
}
</style>
