import { defineStore } from 'pinia';
import { post } from '@/utils/request';

const store = defineStore('login', {
	state: () => ({
		isLogin: false,
	}),
	getters: {},
	actions: {
		async login(userInfo) {
			const res = await post('/api/login', userInfo);
			const isSuccess = res.data.success;
			this.isLogin = isSuccess;
			localStorage.setItem('token', isSuccess);
			return isSuccess;
		},
	},
});
export default store;
