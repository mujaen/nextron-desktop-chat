import React from 'react'

import { useRouter } from 'next/router'

import { signOut } from 'firebase/auth'
import { firebaseClientAuth } from '../firebase/firebaseClient'

import Layout from '../components/Layout'

function Profile() {
  const router = useRouter()

  const logOut = () => {
    signOut(firebaseClientAuth)
      .then(() => {
        router.push('/login')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <Layout>
      <button onClick={logOut}>로그아웃</button>
    </Layout>
  )
}

export default Profile
