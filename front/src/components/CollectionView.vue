<template>
  <div class="hello">
    <h2>LOS DROP COLLECTION</h2>
    <div class="col">
      <div class="row">
        <NftBox description="" name="NFT World" :image=7></NftBox>
        <NftBox description="" name="Шаман" :image=1></NftBox>
        <NftBox description="" name="Вино с медведем из КБ" :image=2></NftBox>
      </div>
      <div class="row">
        <NftBox description="" name="Айфон" :image=3></NftBox>
        <NftBox description="" name="Наггетсы из светофора" :image=4></NftBox>
        <NftBox description="" name="Пакет гемов" :image=5></NftBox>
      </div>
      <div class="row">
        <NftBox description="" name="THE LIFE OF SHAMAN" :image=6></NftBox>
      </div>
    </div>
  </div>
</template>

<script>
import NftBox from "./NftBox";
export default {
  name: 'CollectionView',
  components: {NftBox},
}
</script>

<style>
.hello {
  padding-bottom: 50px;
}

.hello h2 {
  padding-top: 10px;
  color: white;
  font-size: 40px;
}
.row {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
