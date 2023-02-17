import React, { useState, useMemo, useEffect, createContext } from "react"
import { User } from "firebase/auth"
import { firebaseClientAuth } from "../firebase/firebaseClient";
import nookies from "nookies"

const AuthContext = createContext<{user: User | null}>({
    user: null
})

const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState<User | null>(null);

    const user = useMemo(() => ({
        user: userState,
    }), [userState])

    useEffect(() => {
        return firebaseClientAuth.onIdTokenChanged(async (user) => {
            if(!user) {
                setUserState(null)
                nookies.set(null, 'token', '', {
                    httpOnly: process.env.NODE_ENV !== "development",
                    secure: process.env.NODE_ENV !== "development",
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/", 
                })
                return
            }

            setUserState(user)
            const token = await user.getIdToken();
            nookies.destroy(null, 'token')
            nookies.set(null, 'token', token, {
                httpOnly: process.env.NODE_ENV !== "development",
                secure: process.env.NODE_ENV !== 'development',
                maxAge: 60 * 60,
                sameSite: 'strict',
                path: '/', 
            })
        })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider