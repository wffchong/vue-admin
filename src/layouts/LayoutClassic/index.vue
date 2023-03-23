<!-- 经典布局 -->
<template>
	<el-container class="layout">
		<el-header>
			<div class="header-lf">
				<div class="logo flx-center">
					<img src="@/assets/images/logo.svg" alt="logo" />
					<span>Vue Admin</span>
				</div>
				<ToolBarLeft />
			</div>
		</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<Main />
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts" name="layoutClassic">
import Main from '../components/Main/index.vue'
import ToolBarLeft from '../components/Header/ToolBarLeft.vue'
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
