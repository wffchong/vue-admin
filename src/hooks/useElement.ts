import { ElCheckbox, ElDatePicker, ElInput, ElSelect, ElTreeSelect } from 'element-plus'

// 动态引入的el组件使用component会有问题，做一个映射
export const useElement = () => {
	return computed(() => (type: string = 'input') => {
		const elementTypeMap = {
			input: ElInput,
			select: ElSelect,
			checkbox: ElCheckbox,
			'date-picker': ElDatePicker,
			'tree-select': ElTreeSelect
		}
		return elementTypeMap[type as keyof typeof elementTypeMap]
	})
}
