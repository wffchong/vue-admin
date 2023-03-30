<template>
	<Tabs v-if="themeConfig.tabs" />
	<el-main>
		<router-view v-slot="{ Component, route }">
			<transition appear name="fade-transform" mode="out-in">
				<keep-alive :include="keepAliveStore.keepAliveName">
					<component :is="Component" :key="route.path" v-if="isRouterShow" />
				</keep-alive>
			</transition>
		</router-view>
	</el-main>
	<el-footer v-if="themeConfig.footer">
		<Footer />
	</el-footer>
</template>

<script setup lang="ts">
import Tabs from '../Tabs/index.vue'
import Footer from '../Footer/index.vue'
import { useGlobalStore } from '@/stores'
import { useKeepAliveStore } from '@/stores/modules/keepAlive'

const globalStore = useGlobalStore()
const keepAliveStore = useKeepAliveStore()
console.log('keepAliveStore', keepAliveStore.keepAliveName)
const themeConfig = computed(() => globalStore.themeConfig)

// 刷新当前页面
const isRouterShow = ref(true)
</script>

<style scoped></style>
