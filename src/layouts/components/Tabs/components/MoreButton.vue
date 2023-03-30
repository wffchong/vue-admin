<template>
	<el-dropdown trigger="click" :teleported="false">
		<el-button size="small" type="primary">
			<span>{{ $t('tabs.more') }}</span>
			<el-icon class="el-icon--right"><arrow-down /></el-icon>
		</el-button>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="refresh">
					<el-icon><Refresh /></el-icon>{{ $t('tabs.refresh') }}
				</el-dropdown-item>
				<el-dropdown-item @click="maximize">
					<el-icon><FullScreen /></el-icon>{{ $t('tabs.maximize') }}
				</el-dropdown-item>
				<el-dropdown-item divided @click="closeCurrentTab">
					<el-icon><Remove /></el-icon>{{ $t('tabs.closeCurrent') }}
				</el-dropdown-item>
				<el-dropdown-item @click="closeOtherTab">
					<el-icon><CircleClose /></el-icon>{{ $t('tabs.closeOther') }}
				</el-dropdown-item>
				<el-dropdown-item @click="closeAllTab">
					<el-icon><FolderDelete /></el-icon>{{ $t('tabs.closeAll') }}
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script setup lang="ts">
import { HOME_URL } from '@/config/config'
import { useGlobalStore } from '@/stores'
import { useTabsStore } from '@/stores/modules/tabs'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const tabStore = useTabsStore()
const globalStore = useGlobalStore()
const keepAliveStore = useKeepAliveStore()
const themeConfig = computed(() => globalStore.themeConfig)

// 接收Main组件传过来的刷新函数，控制路由
const refreshCurrentPage: Function = inject('refresh') as Function
// refresh current page
const refresh = () => {
	setTimeout(() => {
		keepAliveStore.removeKeepAliveName(route.name as string)
		refreshCurrentPage(false)
		nextTick(() => {
			keepAliveStore.addKeepAliveName(route.name as string)
			refreshCurrentPage(true)
		})
	}, 0)
}

// maximize current page
const maximize = () => {
	globalStore.setThemeConfig({ ...themeConfig.value, maximize: true })
}

// Close Current
const closeCurrentTab = () => {
	if (route.meta.isAffix) return
	tabStore.removeTabs(route.fullPath)
	keepAliveStore.removeKeepAliveName(route.name as string)
}

// Close Other
const closeOtherTab = () => {
	tabStore.closeMultipleTab(route.fullPath)
	keepAliveStore.setKeepAliveName([route.name] as string[])
}

// Close All
const closeAllTab = () => {
	tabStore.closeMultipleTab()
	keepAliveStore.setKeepAliveName()
	router.push(HOME_URL)
}
</script>

<style scoped lang="scss">
@import '../index.scss';
</style>
