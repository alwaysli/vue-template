export default {
	url: '/api/login',
	method: 'get',
	response: () => {
		return {
			code: '200',
			success: true,
			token: '',
		};
	},
};
