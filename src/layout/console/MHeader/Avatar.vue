<script setup>
import { UserOutlined } from '@ant-design/icons-vue';

const handleMenuClick = (e) => {
	console.log('点击：', e.key);
};
</script>

<template>
	<a-dropdown class="avater">
		<div>
			<a-avatar :size="40">
				<template #icon><UserOutlined /></template>
			</a-avatar>
			<span class="user-name">长征</span>
		</div>
		<template #overlay>
			<a-menu @click="handleMenuClick">
				<a-menu-item key="1">个人信息</a-menu-item>
				<a-menu-item key="2">退出登录</a-menu-item>
			</a-menu>
		</template>
	</a-dropdown>
</template>
<style scoped>
.avater {
	float: right;
}
.user-name {
	margin-left: 8px;
}
</style>
