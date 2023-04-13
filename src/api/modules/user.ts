import http from '@/api'
import { User } from '../interface'

// * 获取用户部门列表
export const getUserDepartment = () => {
	return http.get<User.ResDepartment>(`/user/department`)
}
