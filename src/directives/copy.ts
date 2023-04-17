/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import type { Directive, DirectiveBinding } from 'vue'

interface ElType extends HTMLElement {
	copyData: string | number
	__handleClick__: any
}

const copy: Directive = {
	mounted(el: ElType, binding: DirectiveBinding) {
		const { value } = binding
		el.copyData = value
		el.addEventListener('click', handleClick)
	},
	updated(el: ElType, binding: DirectiveBinding) {
		const { value } = binding
		el.copyData = value
	},
	beforeUnmount(el: ElType) {
		el.removeEventListener('click', el.__handleClick__)
	}
}

function handleClick(this: any) {
	const input = document.createElement('input')
	input.value = this.copyData.toLocaleString()
	document.body.appendChild(input)
	// 选择全部的内容
	input.select()
	// 执行复制操作
	document.execCommand('Copy')
	document.body.removeChild(input)
	ElMessage({
		type: 'success',
		message: '复制成功'
	})
}

export default copy
