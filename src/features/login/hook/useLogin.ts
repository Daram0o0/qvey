import { useCallback, useContext, useState } from 'react'
import { loginApi } from '../api'
import type { LoginParams } from '../types'
import { ToastError } from '@/shared/errors'
import { AuthContext } from '@/app/context'

export const useLogin = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    // const [data, setData] = useState<LoginResponse | null>(null)
    const authContext = useContext(AuthContext)

    const login = useCallback(async (params: LoginParams) => {
        setLoading(true)
        setError(null)

        try {
            const accessToken = await loginApi(params)

            if (!authContext) {
                throw new Error('internal client error, AuthProvider 가 없습니다.')
            }

            authContext.setAccessToken(accessToken)
        } catch (err: unknown) {
            const message = err instanceof ToastError ? err.message : '알 수 없는 오류가 발생했습니다.'
            setError(message)
            throw new ToastError(message, 'error')
        } finally {
            setLoading(false)
        }
    }, [])

    // TODO: 로그인 실패 후 상태 초기화를 위핸 reset 함수 추가 고려
    return { login, error, loading }
}
