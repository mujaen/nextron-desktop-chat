import React, { useState } from 'react'

import { useRouter } from 'next/router'

import { signOut, updateProfile } from 'firebase/auth'
import { firebaseClientAuth } from '../firebase/firebaseClient'

import Layout from '../components/Layout'

function Profile() {
  const router = useRouter()
  const displayName = firebaseClientAuth.currentUser.displayName
  const [name, setName] = useState<string>(displayName ? displayName : '')

  const logOut = (): void => {
    signOut(firebaseClientAuth)
      .then(() => {
        router.push('/login')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const changeInfo = (): void => {
    updateProfile(firebaseClientAuth.currentUser, {
      displayName: name,
    })
  }

  return (
    <Layout>
      <input
        className="w-full p-2 border border-gray-400 border-solid text-sm placeholder:text-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="닉네임을 입력해 주세요"
        type="text"
      />
      <button
        className="w-full mt-2 pt-2 pb-2 border border-gray-100 border-solid rounded bg-indigo-700 text-sm text-white"
        onClick={changeInfo}
      >
        닉네임 변경하기
      </button>
      <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <button
        className="w-full pt-2 pb-2 border border-gray-400 border-solid rounded bg-gray-100 text-sm font-bold"
        onClick={logOut}
      >
        로그아웃
      </button>
    </Layout>
  )
}

export default Profile
