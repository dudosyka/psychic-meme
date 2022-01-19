<template>
  <div class="hello">
    <h2>LOS DROP COLLECTION</h2>
    <div class="col">
      <div class="row">
        <NftBox description="Описание" name="LOS DROP" :image=1></NftBox>
        <NftBox description="Описание" name="LOS DROP" :image=1></NftBox>
        <NftBox description="Описание" name="LOS DROP" :image=1></NftBox>
      </div>
      <div class="row">
        <NftBox description="Описание" name="LOS DROP" :image=1></NftBox>
        <NftBox description="Описание" name="LOS DROP" :image=1></NftBox>
        <NftBox description="Описание" name="LOS DROP" :image=1></NftBox>
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
