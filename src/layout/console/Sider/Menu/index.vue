<script setup>
  import { reactive } from 'vue';
  import {MIcon} from './MIcon.js';
  import router from '@/config/router/console.js'
  import { useRoute, useRouter } from 'vue-router';
  import { getParentPath} from '@/config/router/utils.js'

  const $route = useRoute();
  const $router = useRouter();

  const state = reactive({
    collapsed: false,
    selectedKeys: [$route.path],
    openKeys: getParentPath($route.path),
  });

  const onSelect = ({ selectedKeys }) => {
    state.selectedKeys=[`${selectedKeys}`];
    $router.push({path: `${selectedKeys}`})
  }
  const onOpenChange = (openKeys) => {
    state.openKeys = openKeys;
  }

</script>

<template>
  <a-menu :selectedKeys="state.selectedKeys" :open-keys="state.openKeys" @select="onSelect" @openChange="onOpenChange" theme="dark" mode="inline">
    <template v-for="route in router">
      <template  v-if="!route.children &&  !route.meta.hidden">
        <a-menu-item :key="route.path">
          <template #icon v-if="route.meta.icon">
            <MIcon :type="route.meta.icon" />
          </template>
          <span>{{ route.meta.title }}</span>
        </a-menu-item>
      </template>
      <template  v-else-if="!route.meta.hidden">
        <a-sub-menu :key="route.path">
          <template #icon v-if="route.meta.icon">
            <MIcon :type="route.meta.icon" />
          </template>
        <template #title>{{ route.meta.title }}</template>
        <template  v-for="route2 in route.children">
          <a-menu-item v-if="!route2.meta.hidden" :key="route2.path">{{ route2.meta.title }}</a-menu-item>
        </template>
        </a-sub-menu>
      </template>
    </template>

  </a-menu>
</template>

<!-- <style src="./index.less" scoped></style> -->
