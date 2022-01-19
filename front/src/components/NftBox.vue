<template>
  <div class="nft_box">
    <div class="author">
      <p>YAN SCHAFER</p>
    </div>
    <div class="collection_image">
      <img id="image" v-if="image == 1" src="../assets/1.png">
      <img id="image" v-if="image == 2" src="../assets/2.png">
      <img id="image" v-if="image == 3" src="../assets/3.png">
      <img id="image" v-if="image == 4" src="../assets/4.png">
      <img id="image" v-if="image == 5" src="../assets/5.png">
      <img id="image" v-if="image == 6" src="../assets/6.png">
    </div>
    <div class="inf">
      <div class="title">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
      </div>
      <div class="timer">
        <div class="btn">
            <div @click="view()" class="timer-btn">ПРОСМОТРЕТЬ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'

export default {
  name: "NftBox",
  props: {
    name: String,
    description: String,
    image: Number
  },
  mounted() {
    const viewer = new Viewer(document.getElementById('image'), {
      inline: false,
      toolbar: false,
      navbar: false,
      title: false,
      loop: false,
      viewed() {
        viewer.zoomTo(0.5);
      },
    });
  },
  methods: {
    view() {
      document.getElementById('image').click();
    }
  }
}
</script>

<style>

.nft_box {
  margin-top: 100px;
  width: 23%;
  min-height: 530px;
  padding: 30px 30px 20px;
  display: flex;
  flex-direction: column;
  background: rgba(43, 43, 43, 1);
  color: white;
}
.collection_image {
  width: 65%;
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
  font-size: 26px;
  font-family: Noto Sans,serif;
  line-height: 49px;
  margin-bottom: 8px;
}
.title p {
  text-align: left;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 40px;
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
  width: 200px;
  align-self: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 11px;
  background-color: #00D1FF;
  color: black;
  font-size: 14px;
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
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
  left: 30px;
  bottom: 60px;
}
</style>

<style scoped>

</style>
