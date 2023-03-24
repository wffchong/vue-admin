<!-- 经典布局 -->
<template>
	<el-container class="layout">
		<el-header>
			<div class="header-lf">
				<div class="logo flx-center">
					<img src="@/assets/images/logo.svg" alt="logo" />
					<span>Vue Admin</span>
				</div>
				<ToolBarLeft />
			</div>
		</el-header>
		<el-container class="classic-content">
			<el-aside>
				<div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
					<el-scrollbar>
						<el-menu
							:default-active="activeMenu"
							:router="false"
							:collapse="isCollapse"
							:collapse-transition="false"
							:unique-opened="true"
							background-color="#ffffff"
							text-color="#303133"
						>
							<SubMenu :menuList="menuList" />
						</el-menu>
					</el-scrollbar>
				</div>
			</el-aside>
			<el-container>
				<Main />
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script setup lang="ts" name="layoutClassic">
import Main from '../components/Main/index.vue'
import ToolBarLeft from '../components/Header/ToolBarLeft.vue'
import SubMenu from '../components/Menu/SubMenu.vue'
import { useGlobalStore } from '@/stores'
import { useAuthStore } from '@/stores/modules/auth'

const route = useRoute()
const globalStore = useGlobalStore()
const authStore = useAuthStore()

const isCollapse = computed(() => globalStore.themeConfig.isCollapse)
// 当路由指向某一个菜单下的详情时，可以配置在 meta 中 配置 activeMenu，让激活菜单还是和原来一样
const activeMenu = computed(() => (route.meta.activeMenu ? (route.meta.activeMenu as string) : route.path))
const menuList = computed(() => authStore.showMenuListGet)
</script>

<style scoped lang="scss">
@import './index.scss';
</style>

<style lang="scss">
.classic-content {
	height: calc(100% - 55px) !important; // 减去头部高度 --> 去掉滚动条
	.classic-main {
		display: flex;
		flex-direction: column;
	}
}
.el-menu,
.el-menu--popup {
	.el-menu-item {
		&.is-active {
			background: var(--el-color-primary-light-9);
			&::before {
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				width: 4px;
				content: '';
				background: var(--el-color-primary);
			}
		}
	}
}

// guide
#driver-highlighted-element-stage {
	background-color: #606266 !important;
}
</style>
