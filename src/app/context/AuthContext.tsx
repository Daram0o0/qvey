import { createContext, useCallback, useState, type PropsWithChildren } from 'react'

interface AuthContext {
    /**
     * set accessToken
     * @param token AccessToken
     * @returns
     */
    setAccessToken: (token: string) => void

    /**
     * accessToken
     */
    accessToken?: string
}
export const AuthContext = createContext<AuthContext | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
    const [accessToken, setAccessToken] = useState<string | undefined>()

    const _setAccessToken = useCallback((token: string) => {
        setAccessToken(token)
        /**
         * TODO
         * Toast Message 으로 변경
         */
        alert('로그인 되었습니다.')
    }, [])

    const result = {
        setAccessToken: _setAccessToken,
        accessToken,
    }

    return <AuthContext value={result}>{children}</AuthContext>
}
