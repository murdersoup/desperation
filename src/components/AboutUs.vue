<template>
  <div class="about-us">
    <AppMenu />
    <div class="header">
      <h1>Here to help.</h1>
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>
    <div class="content">
      <div class="darker-area">
        <img src="@/assets/dennis.png" alt="Dennis" class="about-image">
        <p class="about-text">This is our head-developer, Dennis.</p>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from './AppMenu.vue';

export default {
  name: 'AboutUs',
  components: {
    AppMenu
  }
};
</script>

<style scoped>
.about-us {
  background-color: #262842;
  color: white;
  height: 100vh;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.header {
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: right;
}

h1 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.5em;
  margin: 0;
}

.logo {
  width: 8em;
  height: auto;
  margin-top: 20px;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.darker-area {
  background-color: #1e1e30;
  padding: 20px;
  width: calc(100% - 380px);
  height: calc(100% - 20px);
  margin: 0 100px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about-image {
  max-width: 50%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.about-text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 2em;
  text-align: center;
  color: white;
  padding: 0 20px;
}
</style>

<style>
/* Global styles to remove margin and padding from the body and html */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
