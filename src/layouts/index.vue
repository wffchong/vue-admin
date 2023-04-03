<template>
	<component :is="LayoutComponents[themeConfig.layout]" />
	<ThemeDrawer />
</template>

<script setup lang="ts" name="layout">
import LayoutClassic from './LayoutClassic/index.vue'
import LayoutVertical from './LayoutVertical/index.vue'
import LayoutTransverse from './LayoutTransverse/index.vue'
import LayoutColumns from './LayoutColumns/index.vue'
import ThemeDrawer from './components/ThemeDrawer/index.vue'
import { useGlobalStore } from '@/stores'

const LayoutComponents: Record<string, Component> = {
	vertical: LayoutVertical,
	classic: LayoutClassic,
	transverse: LayoutTransverse,
	columns: LayoutColumns
}

const globalStore = useGlobalStore()
const themeConfig = computed(() => globalStore.themeConfig)
console.log('themeConfig.layout', themeConfig.value.layout)
</script>

<style scoped lang="scss">
.layout {
	min-width: 760px;
}
</style>
