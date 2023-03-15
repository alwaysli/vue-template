<!-- route 配置layout: false, 表示 该页面不需要layout页面  -->
<route>
  {
    meta: {
      layout: false
    }
  }
</route>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import useStore from './store';

const $router = useRouter();
const store = useStore();
const formState = reactive({
	userName: '',
	password: '',
});
const onFinish = (values) => {
	console.log('Success:', values);
	store.login(values).then((isSucess) => {
		if (isSucess) {
			$router.push('/dashboard');
		}
	});
};
const onFinishFailed = (errorInfo) => {
	console.log('error:', errorInfo);
};
</script>

<template>
	<div class="wraper">
		<div class="container">
			<div class="main">
				<a-typography-title class="title">XXX后台管理系统</a-typography-title>
				<a-form
					:model="formState"
					name="basic"
					@finish="onFinish"
					@finishFailed="onFinishFailed"
				>
					<a-form-item
						name="userName"
						:rules="[{ required: true, message: '请输入用户名' }]"
					>
						<a-input
							placeholder="请输入用户名"
							v-model:value="formState.userName"
						>
							<template #addonBefore>
								<user-outlined type="user" />
							</template>
						</a-input>
					</a-form-item>
					<a-form-item
						name="password"
						:rules="[{ required: true, message: '请输入密码' }]"
					>
						<a-input
							placeholder="请输入密码"
							v-model:value="formState.password"
						>
							<template #addonBefore>
								<lock-outlined />
							</template>
						</a-input>
					</a-form-item>
					<a-form-item>
						<a-button
							block
							type="primary"
							html-type="submit"
							>登录</a-button
						>
					</a-form-item>
				</a-form>
			</div>
		</div>
	</div>
</template>

<style src="./index.less"></style>
