<template>
  <div id="app">
    <header>
      <img src="./assets/logo_final.png">
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
}
#app {
  width: 100%;
  min-height: 100vh;
  background: rgba(32, 32, 32, 1) !important;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
