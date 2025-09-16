import axios from 'axios'
import { LOGIN_API } from '../../../shared/config'
import type { LoginParams, LoginResponse } from '../types'
import { ToastError } from '@/shared/errors'

export const loginApi = async (params: LoginParams): Promise<any> => {
    try {
        const response = await axios.post<LoginResponse>(LOGIN_API, params)

        const { accessToken } = response.data

        if (!accessToken) {
            throw new ToastError('로그인 실패', 'error')
        }

        return accessToken
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            const message = error.response?.data?.message || '로그인에 실패하였습니다.'
            throw new ToastError(message, 'error')
        }

        throw new ToastError('알 수 없는 에러가 발생했습니다.', 'error')
    }
}
