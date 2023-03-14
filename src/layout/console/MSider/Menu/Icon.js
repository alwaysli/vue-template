import * as AntdIcons from '@ant-design/icons-vue';
import { createVNode } from 'Vue';

export const Icon = (props) => {
	const { type } = props;
	return createVNode(AntdIcons[type]);
};
