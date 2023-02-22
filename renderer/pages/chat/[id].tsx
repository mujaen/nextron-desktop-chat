import { GetServerSidePropsContext } from 'next'

import { useAuthContext } from '../../context/AuthProvider'

import Channel from '../../components/Channel'

interface ChatPageProps {
  chatId: string
}

const ChatPage = ({ chatId }: ChatPageProps) => {
  const { user } = useAuthContext()

  return <Channel id={chatId} currentUser={user} />
}

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext,
): Promise<{ props: {} }> => {
  try {
    const paramsId = ctx.params.id

    return {
      props: {
        chatId: paramsId,
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
