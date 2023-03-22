<!-- 经典布局 -->
<template>
	<el-container class="layout">
		<el-header>Header</el-header>
		<el-container>
			<el-aside width="200px">Aside</el-aside>
			<el-container>
				<el-main>Main</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts" name="layoutClassic"></script>

<style scoped lang="scss">
@import './index.scss';
</style>
