<template>
  <div>
    <div class="right material-icons menu" @click="menu">{{ sideNav.sign }}</div>
    <transition name="slide" appear>
      <div class="sidebar fade" v-show="!sideNav.show"></div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sideNav: { show: "false", sign: "menu" },
    };
  },
  methods: {
    menu() {
      this.sideNav.show = !this.sideNav.show;
      if (this.sideNav.sign == "close") {
        this.sideNav.sign = "menu";
      } else {
        this.sideNav.sign = "close";
      }
    },
  },
};
</script>

<style scoped>
.box-text {
  text-align: center;
  color: #1b4974 !important;
}
.row {
  display: flex;
}
.box {
  width: 120px;
  height: 120px;
  max-width: 120px;
  max-height: 120px;
  background-color: #fff;
  border-radius: 10px;
  margin: 15px 25px !important;
  border: 1px solid #1b4974;
}
@media screen and (max-width: 1300px) {
  .box {
    width: 100px;
    height: 100px;
  }
  .box-text {
    font-size: 15px;
  }
}
@media screen and (max-width: 480px) {
  .box {
    width: 70px;
    height: 70px;
  }
  .box-text {
    font-size: 13px;
  }
}
@media screen and (max-width: 400px) {
  .box {
    width: 50px;
    height: 50px;
  }
  .box-text {
    font-size: 12px;
  }
}
.box:hover {
  background: linear-gradient(180deg, #5a578a 0%, #150e89 100%);
}
a.box.router-link-exact-active.router-link-active {
  background: linear-gradient(180deg, #5a578a 0%, #150e89 100%);
}
a {
  text-decoration: none;
  font-size: initial;
  color: inherit;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.menu {
  color: #1b4974;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 4px 2px 0 rgba(0, 0, 0, 0.14), -3px 4px 1px -2px rgba(0, 0, 0, 0.12),
    1px 3px 5px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10%;
  font-size: 26px;
  padding: 0.8rem;
  position: fixed;
  right: 1.5rem;
  top: 1rem;
  z-index: 500000;
  font-family: "Material Icons";
}
.menu:hover {
  background-color: #1b4974;
  color: white;
  cursor: pointer;
}
@media screen and (max-width: 445px) {
  .menu {
    padding: 0.4rem;
  }
}
.sidebar {
  background-color: rgb(220, 220, 220);
  width: 100%;
  height: 100%;
  position: fixed;
  overflow-x: hidden;
  top: 0;
  left: 0;
  z-index: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: slideIn 0.5s forwards;
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s;
}
.before-slide-enter,
.slide-leave-to {
  transform: translateX(100vw);
}
</style>
