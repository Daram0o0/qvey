import { createContext, useCallback, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { AuthContext } from './AuthContext'
/**
 * 테스트용 임시
 */
interface D_User {
    name: string
}
/**
 * User Context Props
 */
interface UserContextType {
    /**
     * User Information
     * 로그인 시에 들고옴
     */
    user: object | null

    /**
     * AccessToken 으로 사용자 정보 요청
     */
    fetchUser: (accessToken: string) => void
}
export const Usercontext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: PropsWithChildren) {
    const authContext = useContext(AuthContext)
    if (!authContext) {
        throw new Error('Auth Context Null Error')
    }
    const { accessToken } = authContext
    const [user, setUser] = useState<object | null>(null)

    /**
     * TODO
     * - Backend API 대기중
     */
    const fetchUser = useCallback((accessToken: string): Promise<D_User> => {
        console.log(accessToken)
        /**
         * 테스트 return
         */
        return Promise.resolve({ name: '박태광' })
    }, [])

    useEffect(() => {
        const loadUser = async () => {
            if (!accessToken) {
                setUser(null)
                return
            }
            try {
                const data = await fetchUser(accessToken)
                setUser(data)
            } catch (err) {
                console.warn(err)
                setUser(null)
            }
        }
        loadUser()
    }, [accessToken])

    const result = useMemo(() => ({ user, fetchUser }), [user])
    return <Usercontext value={result}>{children}</Usercontext>
}
