<template>
	<LayoutClassic />
	<ThemeDrawer />
</template>

<script setup lang="ts" name="layout">
import LayoutClassic from './LayoutClassic/index.vue'
import ThemeDrawer from './components/ThemeDrawer/index.vue'
</script>

<style scoped lang="scss">
.layout {
	min-width: 760px;
}
</style>
