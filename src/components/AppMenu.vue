<template>
  <div>
    <div class="menu-button" @click="toggleMenu">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <div v-if="menuOpen" class="menu">
      <ul>
        <li><a @click="navigateTo('/')">Home</a></li>
        <li><a @click="navigateTo('/about-us')">About Us</a></li>
        <li><a @click="navigateTo('/get-started')">Get Started</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppMenu',
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    navigateTo(route) {
      this.$router.push(route);
      this.menuOpen = false;
    }
  }
};
</script>

<style scoped>
.menu-button {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 30px;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 20px;
}

.line {
  width: 100%;
  height: 4px;
  background-color: white;
}

.menu {
  position: absolute;
  top: 60px;
  left: 20px;
  background-color: #262842;
  border: 1px solid white;
  padding: 10px;
  border-radius: 5px;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.menu li {
  margin: 10px 0;
}

.menu a {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>
