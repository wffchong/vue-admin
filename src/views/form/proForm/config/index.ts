interface Config {
	form: Record<string, any>
	columns: {
		formItem: Record<string, any>
		attrs: Record<string, any>
		options?: any
	}[]
}

// 表单配置项
const config: Config = {
	// 表单整体配置项
	form: {
		inline: false,
		labelPosition: 'right',
		labelWidth: '80px',
		size: 'default',
		disabled: false,
		labelSuffix: ' :'
	},
	// 表单列配置项 (formItem 代表 item 配置项，attrs 代表 输入、选择框 配置项)
	columns: [
		{
			formItem: {
				label: '用户名',
				prop: 'username',
				labelWidth: '80px',
				required: true
			},
			attrs: {
				typeName: 'input',
				clearable: true,
				placeholder: '请输入用户名',
				disabled: true,
				initialValue: 'wff'
			}
		},
		{
			formItem: {
				label: '密码',
				prop: 'password',
				class: 'data'
			},
			attrs: {
				typeName: 'input',
				clearable: true,
				autofocus: true,
				placeholder: '请输入密码',
				type: 'password'
			}
		},
		{
			formItem: {
				label: '邮箱',
				prop: 'email'
			},
			attrs: {
				typeName: 'input',
				placeholder: '请输入邮箱',
				clearable: true,
				style: 'width:500px'
			}
		},
		{
			formItem: {
				label: '性别',
				prop: 'sex'
			},
			attrs: {
				typeName: 'select',
				placeholder: '请输入邮箱',
				clearable: true,
				style: 'width:500px',
				initialValue: 'shanghai'
			},
			options: [
				{
					label: 'Zone one',
					value: 'shanghai'
				},
				{
					label: 'Zone two',
					value: 'beijing'
				}
			]
		}
	]
}

export default config
