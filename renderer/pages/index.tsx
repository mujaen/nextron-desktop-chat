import React, { useEffect } from 'react'

import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

import { admin } from '../firebase/firebaseAdmin'
import { db } from '../firebase/firebaseClient'
import { collection, getDocs } from 'firebase/firestore'
import nookies from 'nookies'

import Layout from '../components/Layout'

interface Chat {
  chatText: string
}

interface HomeProps {
  chats: Chat[]
}

function HomePage({ chats }: HomeProps) {
  return (
    <Layout>
      <Link legacyBehavior href="/login">
        <a>Go to join page</a>
      </Link>
    </Layout>
  )
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext,
): Promise<{ props: {} }> => {
  try {
    const cookies = nookies.get(ctx)
    const token = await admin.auth().verifyIdToken(cookies.token)

    const { uid } = token

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
