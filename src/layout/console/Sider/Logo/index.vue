<script>
import imgLogo from '@/assets/logo.svg'
export default {
  data() {
    
    return {
      count: 0,
      imgLogo: imgLogo
    }
  }
}
</script>

<template>
  <div class="logo">
    <img :src="imgLogo" alt="logo">
    <h1 class="title">Vue Template</h1>
  </div>
</template>

<style src="./index.less" scoped></style>
