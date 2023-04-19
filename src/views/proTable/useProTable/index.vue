<template>
	<div class="table-box">
		<div>使用protable</div>
		<ProTable>
			<!-- 表格 header 按钮 -->
			<template #tableHeader>
				<el-button type="primary" :icon="CirclePlus" @click="openDrawer('新增')" v-auth="'add'">新增用户</el-button>
				<el-button type="primary" :icon="Upload" plain @click="batchAdd" v-auth="'batchAdd'">批量添加用户</el-button>
				<el-button type="primary" :icon="Download" plain @click="downloadFile" v-auth="'export'">导出用户数据</el-button>
				<el-button type="primary" plain @click="toDetail">To 子集详情页面</el-button>
				<el-button type="danger" :icon="Delete" plain @click="batchDelete"> 批量删除用户 </el-button>
			</template>
		</ProTable>
	</div>
</template>

<script setup lang="tsx" name="useProTable">
import ProTable from '@/components/ProTable/index.vue'
import { CirclePlus, Delete, Download, Upload } from '@element-plus/icons-vue'

const router = useRouter()

// 新增用户
const openDrawer = (title: string) => {
	console.log('title', title)
}

// 批量新增用户
const batchAdd = () => {
	console.log('新增用户')
}

// 导出用户数据
const downloadFile = () => {
	console.log('导出用户数据')
}

// 跳转详情页
const toDetail = () => {
	router.push(`/proTable/useProTable/detail/${Math.random().toFixed(3)}?params=detail-page`)
}

// 批量删除用户信息
const batchDelete = () => {
	console.log('批量删除用户')
}
</script>
