<!-- 组件的两种注入方式 -->

<!-- 方式一 -->
<!-- <script setup>
import Sider from './Sider';
</script> -->

<!-- 方式二 -->
<script>
import MSider from './MSider/index.vue';
import MHeader from './MHeader/index.vue';

export default {
	components: {
		MSider,
		MHeader,
	},
	data() {
		return {};
	},
};
</script>
<script setup>
// import { useRouter } from 'vue-router';

// const router = useRouter();
</script>

<template>
	<a-layout class="layout">
		<a-layout-sider> <m-sider /> </a-layout-sider>
		<a-layout>
			<a-layout-header>
				<m-header />
			</a-layout-header>
			<a-layout-content>
				<div class="layout-content">
					<router-view></router-view>
				</div>
			</a-layout-content>
			<!-- <a-layout-footer>Footer</a-layout-footer> -->
		</a-layout>
	</a-layout>
</template>

<style src="../../style/console/index.less"></style>
<style src="./index.less" scoped></style>
