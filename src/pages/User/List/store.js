import { defineStore } from 'pinia';
import { get } from '@/utils/request';

const useCounterStore = defineStore('userList', {
	state: () => ({
		pageSize: 10,
		pageNum: 1,
		userList: [],
	}),
	getters: {
		double: (state) => state.count * 2,
	},
	actions: {
		increment() {
			this.count++;
		},
		async getUserList() {
			const res = await get('/api/user/list', {});
			this.userList = res.data.data;
		},
	},
});
export default useCounterStore;
