import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { GetServerSidePropsContext } from 'next'
import Layout from '../components/Layout'
import nookies from 'nookies'
import { admin } from '../firebase/firebaseAdmin'
import { db } from '../firebase/firebaseClient'
import { collection, getDocs } from 'firebase/firestore'

interface Chat {
  chatText: string
}

interface HomeProps {
  chats: Chat[]
}

function HomePage({ chats }: HomeProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Index - Nextron (with-typescript)</title>
      </Head>
      <Layout>
        <Link legacyBehavior href="/login">
          <a>Go to join page</a>
        </Link>
      </Layout>
    </React.Fragment>
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
