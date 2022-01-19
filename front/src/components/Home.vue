<template>
  <div class="home">
    <h1 v-if="!canClime"></h1>
    <h1 v-else>Clime</h1>
    <div class="nft_box">
      <div class="author">
          <p>YAN SCHAFER</p>
      </div>
      <div class="collection_image">
          <img src="../assets/collection_image.jpg">
      </div>
      <div class="inf">
        <div class="title">
          <h2>LOS DROP</h2>
          <p>Доступен: {{ available_count }}/1</p>
          <p>Вы можете забрать: {{ available_count }}</p>
        </div>
        <div class="price">
          <p>СТОИМОСТЬ: <span>БЕСЦЕННО</span></p>
        </div>
        <div class="timer">
          <p>МОЖНО ЗАБРАТЬ ЧЕРЕЗ</p>
          <div class="btn">
            <template v-if="canClime">
              <div>{{ hours }}:{{ minutes }}:{{ seconds }}</div>
            </template>
            <template v-else>
              <div class="timer-btn" @click="clime()">ПОЛУЧИТЬ</div>
            </template>
          </div>
        </div>
      </div>
    </div>
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
    available_count: 1,
  }),
  async created() {
    this.available_count = this.getAvailableCount();
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
      if (this.hours <= 9)
        this.hours = "0" + String(this.hours);
      const hours_time = this.hours * 3600;
      this.minutes = Math.floor((this.time - hours_time) / 60);
      if (this.minutes <= 9)
        this.minutes = "0" + String(this.minutes);
      const minutes_time = this.minutes * 60;
      this.seconds = (this.time - hours_time - minutes_time);
      if (this.seconds <= 9)
        this.seconds = "0" + String(this.seconds);
    },
    getAvailableCount() {
      const available = localStorage.getItem("available");
      console.log(available);
      if (available) {
        return parseInt(available);
      }
      else {
        localStorage.setItem("available", "1");
        return 1;
      }
    },
    clime() {
      console.log("claimed");
      this.available_count = 0;
      localStorage.setItem("available", "0");
      this.$router.push("/view");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  overflow: hidden !important;
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
.nft_box {
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
  width: 480px;
  min-height: 800px;
  padding: 60px 60px 40px;
  display: flex;
  flex-direction: column;
  background: rgba(43, 43, 43, 1);
  color: white;
}
.collection_image {
  width: 300px;
  align-self: center;
}
.collection_image img {
  width: 100%;
}
.title {
  width: fit-content;
  align-self: start;
  margin-top: 30px;
}
.title h2 {
  color: white;
  font-size: 36px;
  font-family: Noto Sans,serif;
  line-height: 49px;
  margin-bottom: 8px;
}
.title p {
  text-align: left;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 8px;
}
.price {
  margin-top: 26px;
  margin-bottom: 26px;
  border-radius: 10px;
  border: solid 1px white;
  padding-top: 30px;
  padding-bottom: 30px;
}
.price span {
  font-weight: bold;
}
.timer {
  align-self: center;
  display: flex;
  flex-direction: column;
}

.timer p {
  font-weight: bold;
  margin-bottom: 26px;
}
.timer div {
  width: 250px;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 11px;
  background-color: #00D1FF;
  color: black;
  font-weight: bold;
}
.timer .btn div {
  cursor: not-allowed;
}
.timer-btn {
  cursor: pointer !important;
}
.author {
  position: relative;
  background-color: #00D1FF;
  color: black;
  font-weight: bold;
  font-size: 20px;
  width: fit-content;
  align-self: end;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  left: 60px;
  bottom: 80px;
}
</style>
