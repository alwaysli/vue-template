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
import { useRoute } from 'vue-router';
import useStore from './store.js';
import Search from './components/Search.vue';
import Table from './components/Table.vue';

const store = useStore();
onMounted(() => {
	const $router = useRoute();
	console.log('router:', $router.meta, $router.params);
	store.getUserList();
});
</script>

<template>
	<Search />
	<Table />
</template>

<style scoped></style>
