import { createContext, useCallback, type PropsWithChildren } from 'react'

interface AuthContext {
    /**
     * set accessToken
     * @param token AccessToken
     * @returns
     */
    setAccessToken: (token: string) => void
}
export const AuthContext = createContext<AuthContext | undefined>(undefined)

export function AuthProvider({ children }: PropsWithChildren) {
    const setAccessToken = useCallback((token: string) => {
        console.log(token)
    }, [])

    return <AuthContext value={{ setAccessToken }}>{children}</AuthContext>
}
