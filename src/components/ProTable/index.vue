<template>
	<!-- 表格内容 card -->
	<div class="card table-main">
		<!-- 表格头部 操作按钮 -->
		<div class="table-header">
			<div class="header-button-lf">
				<slot name="tableHeader" :selectedListIds="selectedListIds" :selectedList="selectedList" :isSelected="isSelected" />
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
		<!-- 表格主体 -->
		<el-table
			ref="tableRef"
			v-bind="$attrs"
			:data="tableData"
			:border="border"
			:row-key="rowKey"
			@selection-change="selectionChange"
		>
			<!-- 默认插槽 -->
			<slot></slot>
			<template v-for="item in tableColumns" :key="item">
				<!-- selection || index -->
				<el-table-column
					v-bind="item"
					:align="item.align ?? 'center'"
					:reserve-selection="item.type == 'selection'"
					v-if="item.type == 'selection' || item.type == 'index'"
				>
				</el-table-column>
				<!-- expand 支持 tsx 语法 && 作用域插槽 (tsx > slot) -->
				<el-table-column v-bind="item" :align="item.align ?? 'center'" v-if="item.type == 'expand'" v-slot="scope">
					<component v-if="item.render" :is="item.render" v-bind="scope"></component>
					<slot v-else :name="item.type" v-bind="scope"></slot>
				</el-table-column>
				<!-- other 循环递归 -->
				<TableColumn v-if="!item.type && item.prop && item.isShow" :column="item">
					<template v-for="slot in Object.keys($slots)" #[slot]="scope">
						<slot :name="slot" v-bind="scope"></slot>
					</template>
				</TableColumn>
			</template>
			<!-- 表格无数据情况 -->
			<template #empty>
				<div class="table-empty">
					<slot name="empty">
						<img src="@/assets/images/notData.png" alt="notData" />
						<div>暂无数据</div>
					</slot>
				</div>
			</template>
		</el-table>
	</div>
</template>

<script setup lang="ts" name="ProTable">
import { Refresh, Printer, Operation, Search } from '@element-plus/icons-vue'
import { useTable } from '@/hooks/useTable'
import type { ElTable, TableProps } from 'element-plus'
import { ColumnProps } from './interface'
import { useSelection } from '@/hooks/useSelection'

interface ProTableProps extends Omit<TableProps<any>, 'data'> {
	columns: ColumnProps[] // 列配置项
	requestApi: (params: any) => Promise<any> // 请求表格数据的api ==> 必传
	requestAuto?: boolean // 表格初始化是否自动执行请求 API
	dataCallback?: (data: any) => any // 返回数据的回调函数，可以对数据进行处理 ==> 非必传
	border?: boolean // 是否带有纵向边框 ==> 非必传（默认为true）
	pagination?: boolean // 是否需要分页组件 ==> 非必传（默认为true）
	rowKey?: string // 行数据的 Key，用来优化 Table 的渲染，当表格数据多选时，所指定的 id ==> 非必传（默认为 id）
	initParam?: any // 初始化请求参数 ==> 非必传（默认为{}）
}

// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<ProTableProps>(), {
	columns: () => [],
	requestAuto: true,
	pagination: true,
	initParam: {},
	border: true,
	rowKey: 'id',
	searchCol: () => ({ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 })
})

// 表格 DOM 元素
const tableRef = ref<InstanceType<typeof ElTable>>()

// 表格多选 Hooks
const { selectionChange, selectedList, selectedListIds, isSelected } = useSelection(props.rowKey)

const { tableData, getTableList } = useTable(props.requestApi, props.initParam, props.pagination, props.dataCallback)

// 清空选中数据列表
const clearSelection = () => tableRef.value!.clearSelection()

// 初始化请求
onMounted(() => props.requestAuto && getTableList())

// 接收 columns 并设置为响应式
const tableColumns = ref<ColumnProps[]>(props.columns)

// 定义 enumMap 存储 enum 值（避免异步请求无法格式化单元格内容 || 无法填充搜索下拉选择）
const enumMap = ref(new Map<string, { [key: string]: any }[]>())
provide('enumMap', enumMap)
const setEnumMap = async (col: ColumnProps) => {
	if (!col.enum) return
	// 如果当前 enum 为后台数据需要请求数据，则调用该请求接口，并存储到 enumMap
	if (typeof col.enum !== 'function') return enumMap.value.set(col.prop!, col.enum!)
	const { data } = await col.enum()
	enumMap.value.set(col.prop!, data)
}

// 扁平化 columns
const flatColumnsFunc = (columns: ColumnProps[], flatArr: ColumnProps[] = []) => {
	columns.forEach(async col => {
		if (col._children?.length) flatArr.push(...flatColumnsFunc(col._children))
		flatArr.push(col)

		// 给每一项 column 添加 isShow && isFilterEnum 默认属性
		col.isShow = col.isShow ?? true
		col.isFilterEnum = col.isFilterEnum ?? true

		// 设置 enumMap
		setEnumMap(col)
	})
	return flatArr.filter(item => !item._children?.length)
}

// flatColumns
const flatColumns = ref<ColumnProps[]>()
flatColumns.value = flatColumnsFunc(tableColumns.value)

const handlePrint = () => {}
const openColSetting = () => {}
const isShowSearch = () => {}

// 暴露给父组件使用
defineExpose({
	getTableList,
	clearSelection
})
</script>
