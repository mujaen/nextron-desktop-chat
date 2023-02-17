import { GetServerSidePropsContext } from 'next'

import { db } from '../../firebase/firebaseClient'
import { collection, getDocs } from 'firebase/firestore'

import Channel from '../../components/Channel'

interface ChatPageProps {
  pageId: string
  chatDocs: string[]
}

const ChatPage = ({ pageId, chatDocs }: ChatPageProps) => {
  return <Channel id={pageId} chats={chatDocs} />
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext,
): Promise<{ props: {} }> => {
  try {
    const id = ctx.query['id']
    const docRef = await getDocs(collection(db, `collection-${id}`))

    const chatList = docRef.docs.map((doc) => {
      return {
        chatText: doc.data().text,
      }
    })

    return {
      props: {
        pageId: id,
        chatDocs: chatList,
      },
    }
  } catch {
    ctx.res.writeHead(302, { Location: '/' })
    ctx.res.end()

    return {
      props: {},
    }
  }
}

export default ChatPage
