<!-- 纵向布局 -->
<template>
	<div class="layout">
		<el-container>
			<el-aside>
				<div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
					<div class="logo flx-center">
						<img src="@/assets/images/logo.svg" alt="logo" />
						<span v-show="!isCollapse">Vue Admin</span>
					</div>
					<el-scrollbar>
						<el-menu
							:default-active="activeMenu"
							:router="false"
							:collapse="isCollapse"
							:collapse-transition="false"
							:unique-opened="true"
							background-color="#191a20"
							text-color="#bdbdc0"
							active-text-color="#ffffff"
						>
							<SubMenu :menuList="menuList" />
						</el-menu>
					</el-scrollbar>
				</div>
			</el-aside>
			<el-container>
				<el-header>
					<ToolBarLeft />
					<ToolBarRight />
				</el-header>
				<Main />
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts" name="layoutVertical">
import Main from '../components/Main/index.vue'
import ToolBarLeft from '../components/Header/ToolBarLeft.vue'
import ToolBarRight from '../components/Header/ToolBarRight.vue'
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
.vertical {
	.el-menu,
	.el-menu--popup {
		.el-menu-item {
			&.is-active {
				background: #060708;
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
}
</style>
