import axios from 'axios';

const instance = axios.create({
	baseURL: '/',
	timeout: 3000,
});

// 添加请求拦截器
instance.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
instance.interceptors.response.use(
	function (response) {
		// 对响应数据做点什么
		return response;
	},
	function (error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

export const get = (url, params, options) => instance.get(url, { params, ...options });
export const post = (url, data, params, options) => instance.get(url, { data, params, ...options });
export const postForm = (url, data, params, options) => instance.post(url, { data, params, ...options });
export const put = (url, data, params, options) => instance.put(url, { data, params, ...options });
export const del = (url, data, params, options) => instance.delete(url, { data, params, ...options });
