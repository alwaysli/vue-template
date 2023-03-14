<template>
	<div class="block search">
		<a-form name="basic">
			<a-row :gutter="16">
				<a-col :span="6">
					<a-form-item label="用户名" name="userName">
						<a-input placeholder="请输入" />
					</a-form-item>
				</a-col>
				<a-col :span="6">
					<a-form-item label="性别" name="sex">
						<a-select placeholder="请选择">
							<a-select-option value="">请选择</a-select-option>
							<a-select-option value="男">男</a-select-option>
							<a-select-option value="女">女</a-select-option>
						</a-select>
					</a-form-item>
				</a-col>
				<a-col :span="6">
					<a-form-item label="创建日期" name="createTime">
						<a-date-picker />
					</a-form-item>
				</a-col>
				<a-col :span="6" class="action">
					<a-button type="primary">搜索</a-button>
					<a-button>重置</a-button>
				</a-col>
			</a-row>
		</a-form>
	</div>
</template>
