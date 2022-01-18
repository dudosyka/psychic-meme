<template>
  <div class="home">
    <h1>Tratata</h1>
    <div>{{ nowTime }}</div>
  </div>
</template>

<script>
// import Api from '../api.js';

export default {
  name: 'Home',
  data: () => ({
    nowTime: null
  }),
  async created() {
    // const api = new Api();
    // this.nowTime = await api.time().then(data => parseInt(data));
    this.nowTime = Date.now();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
