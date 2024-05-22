<template>
    <div class="get-started">
      <AppMenu />
      <div class="content">
        <h1>Here to help.</h1>
        <img src="@/assets/logo.png" alt="Logo" class="logo">
      </div>
      <input type="text" placeholder="Enter text here" class="user-input">
    </div>
  </template>
  
  <script>
  import AppMenu from './AppMenu.vue';
  
  export default {
    name: 'GetStarted',
    components: {
      AppMenu
    }
  };
  </script>
  
  <style scoped>
  .get-started {
    background-color: #262842;
    color: white;
    height: 100vh;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .content {
    text-align: right;
  }
  
  h1 {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 1.5em;
    margin: 0;
  }
  
  .logo {
    width: 50px;
    height: auto;
    margin-top: 10px;
  }
  
  .user-input {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px;
    border-radius: 5px;
    border: none;
    width: 80%;
    max-width: 300px;
  }
  </style>
  