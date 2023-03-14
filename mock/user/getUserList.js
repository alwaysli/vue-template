import { Random as _Random, mock } from 'mockjs';

const Random = _Random;
const data = mock({
	'data|100': [
		{
			'id|+1': 1,
			userName: () => /^([\u4e00-\u9fa5]){2,6}/,
			// userName: () => Random.string(),
			age: () => Random.integer(1, 90),
			addr: Random.city(),
			sex: Random.string('男女', 1, 1),
			createTime: () => Random.date(),
			avator: Random.image(),
		},
	],
});
export default {
	url: '/api/user/list',
	method: 'get',
	response: () => {
		return {
			code: '200',
			success: true,
			data: data.data,
		};
	},
};
