import { AuthContext } from '@/app/context'
import { useContext, type PropsWithChildren } from 'react'

/**
 * 로그인 되어 있는 사용자만 접근 가능한 컴포넌트
 */
function AuthComponent({ children }: PropsWithChildren) {
    const authContext = useContext(AuthContext)

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
