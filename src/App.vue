<template>
  <router-view />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sansita+Swashed&display=swap");
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v55/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
    format("woff2");
}

body {
  font-family: "Sansita Swashed", cursive;
}
* {
  padding: 0;
  margin: 0;
  transition: 0.3s;
  overflow-x: hidden;
}

.p-1 {
  padding: 1rem;
}
.p-2 {
  padding: 2rem;
}
.p-3 {
  padding: 3rem;
}
.p-4 {
  padding: 4rem;
}
.p-5 {
  padding: 5rem;
}
.p-6 {
  padding: rem;
}
.px-8 {
  padding: 0rem 8rem;
}
.px-10 {
  padding: 0rem 10rem;
}
.px-12 {
  padding: 0rem 12rem;
}
.px-15 {
  padding: 0rem 15rem;
}
.pt-1 {
  padding-top: 1rem;
}
.pt-2 {
  padding-top: 2rem;
}

.card {
  padding: 1px;
  width: 150px;
  height: 30px;
  /* border: 1px solid black; */
  display: flex;
  border-radius: 2px;
  box-shadow: 2px 3px 1px #fff;
  transition: 10s;
  margin: 5px;
  overflow: hidden;
  text-align: center;
  transition: background-color 0.2s linear;
  justify-content: center;
}

.h3 {
  font-size: 1.2rem;
}

button {
  margin: 5px 20px 20px 0px;
}

.custom-btn {
  font-family: "Sansita Swashed", cursive;
  width: 150px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  vertical-align: middle;
}

/* 15 */
.btn-15 {
  background: #1e4196;
  border: none;
  z-index: 1;
}
.btn-15:after {
  position: absolute;
  content: "";
  width: 0;
  height: 100%;
  top: 0;
  right: 0;
  z-index: -1;
  /* background-color: #b621fe; */
  background-color: #009688;
  border-radius: 5px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
    4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.btn-15:hover {
  color: #fff;
}
.btn-15:hover:after {
  left: 0;
  width: 100%;
}
.btn-15:active {
  top: 2px;
}
.bg-cream {
  background-color: #f1f1f1 !important;
  /* width: 100vw; */
  overflow: hidden;
}

.bg {
  width: 100vw;
  /* background-color: #99a8d2 !important; */
  background-color: #fff !important;
  display: flex;
}
a {
  text-decoration: none;
  color: inherit;
}
.nav-item {
  font-size: 20px;
  margin: 0px 5px;
}

.text {
  font-family: "Sansita Swashed", cursive;
  font-weight: 700;
  color: #000;
  text-shadow: 1px 1px 1px #262323, 1px 2px 1px #919191, 2px 3px 1px #503333, 1px 4px 1px #3777b7;
}

.logoX {
  font-family: "Sansita Swashed", cursive;
  font-size: 2rem;
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: black;
  margin-left: 10px;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  color: white;
  letter-spacing: 1.5px;
}

.chapters {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, 15rem);
  justify-content: center;
}
.uni {
  background-color: #174971;
  background-image: linear-gradient(to bottom right, #174971, #f15b6c);
  padding: 1rem;
  height: 1.9rem;
  border-radius: 10px;
  overflow: hidden;
}

.uni:hover {
  box-shadow: 1px 2px 3px black;
  cursor: pointer;
  background-image: linear-gradient(to bottom right, #f15b6c, #174971);
  border: 1px solid white;
}

.text:hover {
  color: rgba(246, 242, 242, 0.796);
}
.nav-content {
  margin-right: 2rem;
}
.contact-flex {
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin-top: 2rem !important;
}

.bg-white {
  background-color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.bg-members {
  background-image: url(`@/assets/map.jpg`);
  background-color: white;
  /* background-attachment: fixed; */
  background-size: 50rem auto;
  height: auto;
}
.bg-projects {
  background-color: #f1f1f1;
  height: auto;
}
.col-50 {
  width: 50%;
}
.col-30 {
  width: 30.33%;
}
.goals {
  display: flex;
  justify-content: space-around;
}

nav {
  position: fixed;
  background-color: #212121de;
  height: 55px;
  width: 100%;
  z-index: 4;
  box-shadow: 2px 2px 3px #01060a9c;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 860px) {
  .bg {
    /* flex-wrap: wrap; */
    flex-direction: column-reverse;
  }
  .col-50 {
    width: 100%;
    height: auto;
  }
  .content-center {
    margin: 0px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h1 {
    font-size: 2.3rem;
  }
  .text-md {
    width: 100%;
    text-align: center;
    word-wrap: break-word;
    padding: 1rem;
    overflow: hidden;
  }
  span {
    display: inline;
    z-index: 10;
  }
  .h3 {
    width: 100%;
    text-align: center;
    padding: 1rem;
    overflow: hidden;
  }
  .btn-md {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow: hidden;
  }
  button {
    margin: 20px;
  }
  .p-md-1 {
    padding: 1rem;
  }
  .about-heading {
    font-size: 2rem;
    text-align: center;
  }
  .px-md-1 {
    padding: 1rem;
  }
  h2 {
    font-size: 2rem;
    padding: 1rem;
  }
  .goals {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  .col-md-100 {
    width: 100%;
  }
  .row2 {
    flex-direction: column;
  }
  .social-mobile {
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }
}
</style>
