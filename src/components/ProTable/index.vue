<template>
	<!-- 表格内容 card -->
	<div class="card table-main">
		<!-- 表格头部 操作按钮 -->
		<div class="table-header">
			<div class="header-button-lf">
				<slot name="tableHeader" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ProTable"></script>
