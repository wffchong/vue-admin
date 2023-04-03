<template>
	<component :is="LayoutComponents[themeConfig.layout]" />
	<ThemeDrawer />
</template>

<script setup lang="ts" name="layout">
import LayoutClassic from './LayoutClassic/index.vue'
import LayoutVertical from './LayoutVertical/index.vue'
import ThemeDrawer from './components/ThemeDrawer/index.vue'
import { useGlobalStore } from '@/stores'

const LayoutComponents: Record<string, Component> = {
	vertical: LayoutVertical,
	classic: LayoutClassic
}

const globalStore = useGlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)
</script>

<style scoped lang="scss">
.layout {
	min-width: 760px;
}
</style>
