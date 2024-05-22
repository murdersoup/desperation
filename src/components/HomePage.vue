<template>
  <div class="home">
    <AppMenu />
    <div class="content">
      <h1>Here to help.</h1>
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>
  </div>
</template>

<script>
import AppMenu from './AppMenu.vue';

export default {
  name: 'HomePage',
  components: {
    AppMenu
  }
};
</script>

<style scoped>
.home {
  background-color: #262842;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  position: relative;
}

.content {
  text-align: center;
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.logo {
  margin-top: 20px;
  width: 150px; /* Adjust the size as needed */
  height: auto;
}
</style>
