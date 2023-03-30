<template>
	<el-config-provider :locale="i18nLocale" :button="config" :size="assemblySize">
		<router-view></router-view>
	</el-config-provider>
</template>

<script setup lang="ts">
import { getBrowserLang } from '@/utils/util'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useGlobalStore } from '@/stores'
import { useTheme } from '@/hooks/useTheme'

const globalStore = useGlobalStore()
const { initTheme } = useTheme()
initTheme()

// 自动在两个中文字符之间插入空格
const config = reactive({ autoInsertSpace: false })

// element language
const i18nLocale = computed(() => {
	if (globalStore.language == 'zh') return zhCn
	if (globalStore.language == 'en') return en
	return getBrowserLang() == 'zh' ? zhCn : en
})

// 组件大小
const assemblySize = computed(() => globalStore.assemblySize)
</script>
<style scoped></style>
