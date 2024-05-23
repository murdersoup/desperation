<template>
  <div class="get-started">
    <AppMenu />
    <div class="header">
      <h1>Here to help.</h1>
      <img src="@/assets/logo.png" alt="Logo" class="logo">
    </div>
    <div class="content">
      <div class="darker-area">
        <div v-for="(message, index) in messages" :key="index" class="chat-bubble">
          {{ message }}
        </div>
      </div>
    </div>
    <input
      v-model="inputText"
      @keyup.enter="sendMessage"
      type="text"
      placeholder="Enter text here"
      class="user-input"
    >
  </div>
</template>

<script>
import AppMenu from './AppMenu.vue';

export default {
  name: 'GetStarted',
  components: {
    AppMenu
  },
  data() {
    return {
      inputText: '',
      messages: JSON.parse(localStorage.getItem('messages')) || []
    };
  },
  methods: {
    sendMessage() {
      if (this.inputText.trim() !== '') {
        this.messages.push(this.inputText);
        this.inputText = '';
        localStorage.setItem('messages', JSON.stringify(this.messages));
      }
    }
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
  align-items: flex-start;
  overflow-y: auto;
}

.chat-bubble {
  background-color: #3a3a5c;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  max-width: 80%;
  word-wrap: break-word;
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

<style>
/* Global styles to remove margin and padding from the body and html */
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
