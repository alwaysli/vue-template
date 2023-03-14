import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { viteMockServe } from 'vite-plugin-mock';

import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(filename);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
		}),
		Pages({
			dirs: 'src/pages', // 需要生成路由的文件目录
			exclude: ['**/components/*.vue'], // 排除在外的目录，即所有 components 目录下的 .vue 文件都不会生成路由
		}),
		Layouts({
			layoutsDirs: 'src/layout', // 布局文件存放目录
			defaultLayout: 'console/index', // 默认布局，对应 src/layout/console/index.vue
		}),
		viteMockServe({
			supportTs: false, // 如果是 ts 开发，需配置为true
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(_dirname, './src'),
			'@/components': path.resolve(_dirname, './src/componrnts'),
			'@/pages': path.resolve(_dirname, './src/pages'),
		},
	},
	css: {
		modules: {
			localsConvention: 'camelCase',
		},
	},
});
