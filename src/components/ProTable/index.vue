<template>
	<!-- 表格内容 card -->
	<div class="card table-main">
		<!-- 表格头部 操作按钮 -->
		<div class="table-header">
			<div class="header-button-lf">
				<slot name="tableHeader" />
			</div>
			<div class="header-button-ri">
				<slot name="toolButton">
					<el-button :icon="Refresh" circle @click="getTableList" />
					<el-button :icon="Printer" circle @click="handlePrint" />
					<el-button :icon="Operation" circle @click="openColSetting" />
					<el-button :icon="Search" circle @click="isShowSearch" />
				</slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ProTable">
import { Refresh, Printer, Operation, Search } from '@element-plus/icons-vue'

const getTableList = () => {}
const handlePrint = () => {}
const openColSetting = () => {}
const isShowSearch = () => {}
</script>
