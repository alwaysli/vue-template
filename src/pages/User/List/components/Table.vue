<script setup>
import useStore from '../store';

const store = useStore();

const columns = [
	{
		title: '用户名',
		dataIndex: 'userName',
		key: 'userName',
	},
	{
		title: '性别',
		dataIndex: 'sex',
		key: 'sex',
	},
	{
		title: '年龄',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: '地址',
		dataIndex: 'addr',
		key: 'addr',
	},
	{
		title: '创建时间',
		dataIndex: 'createTime',
		key: 'createTime',
	},
	{
		title: '操作',
		key: 'action',
	},
];
</script>

<template>
	<div class="block">
		<a-table :columns="columns" :data-source="store.userList">
			<template #bodyCell="{ column }">
				<template v-if="column.key === 'action'">
					<a>详情</a>
					<a-divider type="vertical" />
					<a>删除</a>
				</template>
			</template>
		</a-table>
	</div>
</template>
