<template>
	<el-config-provider :locale="i18nLocale">
		<router-view></router-view>
	</el-config-provider>
</template>

<script setup lang="ts">
import { getBrowserLang } from '@/utils/util'
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { useGlobalStore } from '@/stores'

const globalStore = useGlobalStore()
// element language
const i18nLocale = computed(() => {
	if (globalStore.language == 'zh') return zhCn
	if (globalStore.language == 'en') return en
	return getBrowserLang() == 'zh' ? zhCn : en
})
</script>
<style scoped></style>
