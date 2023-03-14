<script setup>
import zhCN from 'ant-design-vue/es/locale/zh_CN';
</script>
<template>
	<a-config-provider :locale="zhCN">
		<router-view />
	</a-config-provider>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	background-color: var(--color-bg-1);
}
</style>
