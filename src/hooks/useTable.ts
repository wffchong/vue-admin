import { Table } from './interface'

/**
 * @description table 页面操作方法封装
 * @param {Function} api 获取表格数据 api 方法(必传)
 * @param {Object} initParam 获取数据初始化参数(非必传，默认为{})
 * @param {Boolean} isPageable 是否有分页(非必传，默认为true)
 * @param {Function} dataCallBack 对后台返回的数据进行处理的方法(非必传)
 * */
export const useTable = (
	api: (params: any) => Promise<any>,
	initParam: object = {},
	isPageable: boolean = true,
	dataCallBack?: (data: any) => any
) => {
	const state = reactive<Table.TableStateProps>({
		// 表格数据
		tableData: [],
		// 分页数据
		pageable: {
			// 当前页数
			pageNum: 1,
			// 每页显示条数
			pageSize: 10,
			// 总条数
			total: 0
		},
		// 查询参数(只包括查询)
		searchParam: {},
		// 初始化默认的查询参数
		searchInitParam: {},
		// 总参数(包含分页和查询参数)
		totalParam: {}
	})

	/**
	 * @description 分页查询参数(只包括分页和表格字段排序,其他排序方式可自行配置)
	 * */
	const pageParam = computed({
		get: () => {
			return {
				pageNum: state.pageable.pageNum,
				pageSize: state.pageable.pageSize
			}
		},
		set: (newVal: any) => {
			console.log('我是分页更新之后的值', newVal)
		}
	})

	/**
	 * @description 获取表格数据
	 * @return void
	 * */
	const getTableList = async () => {
		try {
			// 先把初始化参数和分页参数放到总参数里面
			Object.assign(state.totalParam, initParam, isPageable ? pageParam.value : {})
			// 然后把搜索栏的参数也合并
			let { data } = await api({ ...state.searchInitParam, ...state.totalParam })
			// 处理data，处理成合适的格式
			dataCallBack && (data = dataCallBack(data))
			state.tableData = isPageable ? data.list : data
			// 解构后台返回的分页数据 (如果有分页更新分页信息)
			const { pageNum, pageSize, total } = data
			isPageable && updatePageable({ pageNum, pageSize, total })
		} catch (error) {
			console.log('error', error)
		}
	}

	/**
	 * @description 更新分页信息
	 * @param {Object} resPageable 后台返回的分页数据
	 * @return void
	 * */
	const updatePageable = (resPageable: Table.Pageable) => {
		Object.assign(state.pageable, resPageable)
	}

	return {
		...toRefs(state),
		getTableList
	}
}
