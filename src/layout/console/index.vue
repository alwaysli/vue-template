<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>

<template>
  <button @click="count++">Count is: {{ count }}</button>
  1.ol3 demo代码优化，拆成组件；2.RN学习
  <router-view></router-view>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>