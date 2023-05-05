export namespace Table {
	export interface Pageable {
		pageNum: number
		pageSize: number
		total: number
	}
	export interface TableStateProps {
		tableData: any[]
		pageable: Pageable
		searchParam: Record<string, any>
		searchInitParam: Record<string, any>
		totalParam: Record<string, any>
		icon?: Record<string, any>
	}
}

export namespace HandleData {
	export type MessageType = '' | 'success' | 'warning' | 'info' | 'error'
}
