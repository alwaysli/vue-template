import * as Icons from '@ant-design/icons-vue';
import { createVNode } from 'Vue';

export const MIcon = (props) => {
  const {type} = props;
  return createVNode(Icons[type]);
}

