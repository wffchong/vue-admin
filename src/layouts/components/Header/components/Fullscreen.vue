<template>
	<div class="fullscreen">
		<i :class="['iconfont', isFullscreen ? 'icon-suoxiao' : 'icon-fangda']" class="toolBar-icon" @click="toggle"></i>
	</div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
//isFullscreen 当前是否是全屏
//toggle  是函数直接调用即可
const { toggle, isFullscreen } = useFullscreen()
</script>
