<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import BuyerPage from '@/views/BuyerPage.vue'
import SellerPage from '@/views/SellerPage.vue'

export default {
  components: {
    BuyerPage,
    SellerPage
  }
}
</script>


<style>
</style>
