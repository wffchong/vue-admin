<template>
	<div class="tool-bar-ri">
		<span class="username">wff</span>
		<Avatar />
	</div>
</template>

<script setup lang="ts">
import Avatar from './components/Avatar.vue'
</script>

<style scoped lang="scss">
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 30px 0 0;
	.header-icon {
		display: flex;
		align-items: center;
		& > * {
			margin-left: 21px;
		}
	}
	.username {
		margin: 0 20px;
		font-size: 15px;
	}
}
</style>
