import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { firebaseClientAuth } from '../firebase/firebaseClient'
import { useRouter } from 'next/router'

function Login() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('mujaen@nate.com')
  const [password, setPassword] = useState<string>('tlswjd12098!')

  const logIn = async () => {
    await signInWithEmailAndPassword(firebaseClientAuth, email, password)

    await router.push('/')
  }

  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-screen bg-indigo-800">
        <div className="w-56">
          <div className="p-2">
            <svg
              className="m-auto"
              width="120px"
              height="120px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22 10.787c0 4.854-4.253 8.788-9.5 8.788a10.22 10.22 0 0 1-2.684-.355c-1.881 1.241-4.233 1.617-5.485 1.73-.286.027-.434-.347-.24-.559.595-.65 1.431-1.803 1.715-3.368C4.073 15.43 3 13.225 3 10.787 3 5.934 7.253 2 12.5 2S22 5.934 22 10.787z"
                fill="#000000"
              />
            </svg>
          </div>
          <input
            className="w-full p-2 border border-slate-400 border-solid"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <input
            className="w-full p-2 mt-[-1px] border border-slate-400 border-solid"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <button
            className="w-full mt-2 pt-2 pb-2 border border-slate-400 border-solid rounded bg-gray-100 text-sm"
            onClick={logIn}
          >
            로그인
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
