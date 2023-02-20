import { GetServerSidePropsContext } from 'next'

import { db } from '../../firebase/firebaseClient'
import { collection, getDocs, orderBy, limit, query } from 'firebase/firestore'

import { formatDate } from '../../utils/date'

import Channel from '../../components/Channel'

interface ChatPageProps {
  pageId: StringConstructor
}

const ChatPage = ({ pageId }: ChatPageProps) => {
  // const docRef = getDocs(collection(db, `collection-${pageId}`))

  // const chatList = docRef.docs.map((doc) => {
  //   return {
  //     photoURL: doc.data().photoURL,
  //     displayName: doc.data().displayName,
  //     message: doc.data().message,
  //     createdAt: formatDate(doc.data().createdAt),
  //   }
  // })

  return <Channel id={pageId} />
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext,
): Promise<{ props: {} }> => {
  try {
    const id = ctx.query['id']

    return {
      props: {
        pageId: id,
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
