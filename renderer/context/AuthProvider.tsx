import React, { useState, useMemo, useEffect, useContext, createContext } from 'react'
import { User, getAuth } from 'firebase/auth'
import { firebaseClientAuth } from '../firebase/firebaseClient'
import nookies from 'nookies'

const AuthContext = createContext<{ user: Pick<User, 'displayName' | 'photoURL'> | null }>({
  user: null,
})

const AuthProvider = ({ children }) => {
  const [userState, setUserState] = useState<Pick<User, 'displayName' | 'photoURL'> | null>(null)

  const user = useMemo(
    () => ({
      user: userState,
    }),
    [userState],
  )

  useEffect(() => {
    return firebaseClientAuth.onAuthStateChanged(async (user) => {
      if (!user) {
        setUserState(null)
        nookies.set(null, 'token', '', {
          httpOnly: process.env.NODE_ENV !== 'development',
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60,
          sameSite: 'strict',
          path: '/',
        })
        return
      }

      setUserState({
        displayName: user.displayName,
        photoURL: user.photoURL,
      })
      const token = await user.getIdToken()
      nookies.destroy(null, 'token')
      nookies.set(null, 'token', token, {
        httpOnly: process.env.NODE_ENV !== 'development',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 60 * 60,
        sameSite: 'strict',
        path: '/',
      })
    })
  }, [])

  useEffect(() => {
    const refreshToken = setInterval(async () => {
      const { currentUser } = getAuth()
      if (currentUser) await currentUser.getIdToken(true)
    }, 10 * 60 * 1000)

    return () => clearInterval(refreshToken)
  }, [])

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export default AuthProvider
