<route>
  {
    meta: {
      title: '用户列表',
      icon: 'user-outlined'
    }
  }
</route>

<script setup>
  import { onMounted } from 'vue';
  import {useRoute} from 'vue-router'
  onMounted(() => {
    const $router = useRoute();
    console.log('router:', $router.meta, $router.params);
  })
  

</script>

<template>
  <div>
    user
  </div>
</template>

<style scoped>
</style>
