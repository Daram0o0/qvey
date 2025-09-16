import { AuthContext } from '@/app/context'
import { useContext, useEffect, type PropsWithChildren } from 'react'
import { useNavigate } from 'react-router'

/**
 * 로그인 되어 있는 사용자만 접근 가능한 컴포넌트
 */
function AuthComponent({ children }: PropsWithChildren) {
    const authContext = useContext(AuthContext)
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (!authContext) {
    //         throw new Error('Auth Context null error')
    //     }
    //     const { accessToken } = authContext

    //     if (!accessToken) {
    //         alert('로그인 하세요')
    //         navigate('/')
    //     }
    // }, [])
    if (!authContext) {
        return <div>AuthContext error</div>
    }

    const { accessToken } = authContext

    if (!accessToken) {
        return <div>로그인 해주세요</div>
    }

    return <>{children}</>
}
export default AuthComponent
