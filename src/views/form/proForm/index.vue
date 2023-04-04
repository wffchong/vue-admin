<template>
	<div class="card content-box">
		<el-alert
			title="通过 component :is 组件属性 && v-bind 属性透传，可以将 template 中的 html 代码全部改变为 columns 配置项，具体配置请看代码。"
			type="warning"
			:closable="false"
		/>
		<el-form v-bind="config.form" ref="proFormRef" :model="model">
			<template v-for="item in config.columns" :key="item.prop">
				<el-form-item v-bind="item.formItem">
					<template v-if="item.attrs.typeName === 'input'">
						<el-input v-bind="item.attrs" v-model="model[item.formItem.prop]" />
					</template>
					<template v-if="item.attrs.typeName === 'select'">
						<el-select v-model="model[item.formItem.prop]">
							<template v-for="option in item.options" :key="option.label">
								<el-option :label="option.label" :value="option.value"></el-option>
							</template>
						</el-select>
					</template>
				</el-form-item>
			</template>
			<el-form-item>
				<slot name="operation"></slot>
			</el-form-item>
		</el-form>
	</div>
</template>

<script setup lang="ts" name="proForm">
import config from './config'
let model = ref<any>({})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
