<template>
  <div class="menu">
    <div class="menu-icon" @click="toggleMenu">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
    <div v-if="showMenu" class="menu-items">
      <router-link to="/" @click="toggleMenu">Home</router-link>
      <router-link to="/get-started" @click="toggleMenu">Get Started</router-link>
      <router-link to="/about-us" @click="toggleMenu">About Us</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>

<style scoped>
.menu {
  position: absolute;
  top: 20px;
  left: 20px;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.menu-line {
  width: 30px;
  height: 3px;
  background-color: white;
  margin: 4px 0;
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.menu-items a {
  color: white;
  text-decoration: none;
  margin-bottom: 10px;
}
</style>
