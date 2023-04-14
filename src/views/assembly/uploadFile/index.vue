<template>
	<div class="upload content-box">
		<!-- 多图上传 -->
		<div class="card img-box">
			<span class="text">多图片上传组件 🍓🍇🍈🍉</span>
			<div class="upload-list">
				<UploadImgs v-model:fileList="fileList" :drag="false" borderRadius="50%">
					<template #empty>
						<el-icon><Picture /></el-icon>
						<span>请上传照片</span>
					</template>
					<template #tip> 圆形组件，图片最大为 5M（禁止拖拽上传）</template>
				</UploadImgs>
				<UploadImgs v-model:fileList="fileList1" width="250px">
					<template #empty>
						<el-icon><Picture /></el-icon>
						<span>请上传照片</span>
					</template>
					<template #tip> 长方形组件（可拖拽上传）</template>
				</UploadImgs>
			</div>
			<el-descriptions title="配置项 📚（其它参数和单图上传组件相同）" :column="1" border>
				<el-descriptions-item label="fileList">
					双向绑定的 fileList 值，使用示例： v-model:fileList="fileList"
				</el-descriptions-item>
				<el-descriptions-item label="limit"> 最大图片上传数，默认为 5 张 </el-descriptions-item>
			</el-descriptions>
		</div>
		<!-- 单图上传 -->
		<div class="card img-box">
			<span class="text">单图片上传组件 🍓🍇🍈🍉</span>
			<div class="upload-list">
				<UploadImg v-model:imageUrl="avatar1" :fileSize="3">
					<template #tip> 上传图片最大为 3M </template>
				</UploadImg>
				<UploadImg v-model:imageUrl="avatar2" :drag="false" borderRadius="50%">
					<template #empty>
						<el-icon><Avatar /></el-icon>
						<span>请上传头像</span>
					</template>
					<template #tip> 圆形组件（禁止拖拽上传） </template>
				</UploadImg>
				<UploadImg v-model:imageUrl="avatar3" width="250px">
					<template #empty>
						<el-icon><Picture /></el-icon>
						<span>请上传 Banner 图</span>
					</template>
					<template #tip> 长方形组件（可拖拽上传） </template>
				</UploadImg>
				<UploadImg v-model:imageUrl="avatar4" disabled>
					<template #tip> 无图（禁用上传） </template>
				</UploadImg>
				<UploadImg v-model:imageUrl="avatar5" disabled>
					<template #tip> 有图（禁用编辑、删除） </template>
				</UploadImg>
			</div>
			<el-descriptions title="配置项 📚" :column="1" border>
				<el-descriptions-item label="imageUrl">
					双向绑定的 imageUrl 值，使用示例： v-model:imageUrl="avatar"
				</el-descriptions-item>
				<el-descriptions-item label="api">
					上传图片的 api 方法，一般项目上传都是同一个 api 方法，在组件里直接引入即可（非必传）
				</el-descriptions-item>
				<el-descriptions-item label="drag"> 是否支持拖拽上传图片，默认为 true </el-descriptions-item>
				<el-descriptions-item label="disabled"> 是否禁用 上传、删除 功能，可查看图片 </el-descriptions-item>
				<el-descriptions-item label="fileSize"> 单个图片文件大小限制，默认为 5M </el-descriptions-item>
				<el-descriptions-item label="fileType">
					图片类型限制，默认类型为 ["image/jpeg", "image/png", "image/gif"]
				</el-descriptions-item>
				<el-descriptions-item label="height"> 组件高度样式，默认为 "150px" </el-descriptions-item>
				<el-descriptions-item label="width"> 组件宽度样式，默认为 "150px" </el-descriptions-item>
				<el-descriptions-item label="borderRadius"> 组件边框圆角样式，默认为 "8px" </el-descriptions-item>
			</el-descriptions>
		</div>
	</div>
</template>

<script setup lang="ts" name="uploadFile">
import UploadImg from '@/components/Upload/Img.vue'
import UploadImgs from '@/components/Upload/Imgs.vue'

const fileList = ref([{ name: 'img', url: 'https://i.imgtg.com/2023/01/16/QRBHS.jpg' }])
const fileList1 = ref([])

const avatar1 = ref('')
const avatar2 = ref('')
const avatar3 = ref('')
const avatar4 = ref('')
const avatar5 = ref('https://i.imgtg.com/2023/01/16/QRqMK.jpg')
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
