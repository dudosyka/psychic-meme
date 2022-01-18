<template>
  <div class="home">
    <h1 v-if="!canClime">{{ hours }} {{ minutes }} {{ seconds }}</h1>
    <h1 v-else>Clime</h1>
  </div>
</template>

<script>
// import Api from '../api.js';

export default {
  name: 'Home',
  data: () => ({
    time: null,
    hours: 0,
    minutes: 0,
    seconds: 0,
    canClime: false,
  }),
  async created() {
    // const api = new Api();
    // const nowTime = await api.time().then(data => parseInt(data));
    const nowTime = Date.now();
    const date = new Date(2022, 0, 20, 0, 0, 0, 0);
    console.log(date.getTime());
    console.log(nowTime);
    const endTime = date.getTime();
    this.time = Math.floor((endTime - nowTime) / 1000);
    if (this.time > 0) {
      let interval = setInterval(() => {
        this.time -= 1;
        this.tic();
        if (this.time <= 0) {
          this.time = 0;
          clearInterval(interval);
        }
      }, 1000);
    } else {
      this.canClime = true;
    }
  },
  methods: {
    tic() {
      this.hours = Math.floor(this.time / 3600);
      const hours_time = this.hours * 3600;
      this.minutes = Math.floor((this.time - hours_time) / 60);
      const minutes_time = this.minutes * 60;
      this.seconds = (this.time - hours_time - minutes_time);
    }
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
