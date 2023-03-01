import { useAuthContext } from '../context/AuthProvider'

import Avatar from '../components/Avatar'

interface MessageProps {
  id: string
  nick: string
  thumb: string
  message: string
  createdAt: string
}

function Message({ id, nick, thumb, message, createdAt }: MessageProps) {
  const { user } = useAuthContext()

  if (!message) return null

  return (
    <div>
      {/* Document ID와 현재 유저의 uid로 구분 */}
      {id !== user.uid ? (
        <div className="flex p-1 items-start">
          <div className="min-w-[40px]">
            <Avatar src={thumb} alt={nick} />
          </div>
          <div className="mx-2">
            <div className="text-xs text-black">{nick}</div>
            <div className="flex flex-row items-end">
              <div className="text-sm bg-white border p-2 rounded-lg">{message}</div>
              <time className="text-xs text-gray-500 mx-2">{createdAt}</time>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row-reverse items-end p-1">
          <div className="text-sm bg-white border mx-2 p-2 rounded-lg">{message}</div>
          <time className="text-xs text-gray-500">{createdAt}</time>
        </div>
      )}
    </div>
  )
}

export default Message
