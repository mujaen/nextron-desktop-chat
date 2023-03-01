import React, { useEffect } from 'react'

import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

import { admin } from '../firebase/firebaseAdmin'
import { db } from '../firebase/firebaseClient'
import { collection, getDocs } from 'firebase/firestore'
import nookies from 'nookies'

import Layout from '../components/Layout'
import Avatar from '../components/Avatar'

interface Chat {
  chatText: string
}

interface HomeProps {
  chats: Chat[]
}

function HomePage({ chats }: HomeProps) {
  return (
    <Layout>
      <ul>
        <li>
          <Link legacyBehavior href="/chat/2">
            <a>
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="min-w-[40px]">
                    <Avatar src="" alt="도라에몽" />
                  </div>
                  <div className="ml-2">
                    <div className="text-sm text-gray-500">도라에몽</div>
                    <div className="text-sm">흐음.. 어쩔 수 없군</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">오후 16:43</div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </Layout>
  )
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext,
): Promise<{ props: {} }> => {
  try {
    const cookies = nookies.get(ctx)
    const decodedToken = await admin.auth().verifyIdToken(cookies.token)

    const { uid } = decodedToken

    const docRef = await getDocs(collection(db, uid))

    const chatList = docRef.docs.map((doc) => {
      return {
        chatText: doc.data().text,
      }
    })

    return {
      props: {
        chats: chatList,
      },
    }
  } catch {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()

    return {
      props: {},
    }
  }
}

export default HomePage
