import { useState } from 'react'
import Message from './Message'

import { db, firebaseClientAuth } from '../firebase/firebaseClient'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

function Channel({ id, chats }) {
  const [newMessage, setNewMessage] = useState<string>('')
  const docRef = collection(db, `collection-${id}`)

  const handleOnChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    addDoc(docRef, {
      nick: 'jinjer',
      text: newMessage,
      createdAt: serverTimestamp(),
    })
  }

  const message = {
    nick: 'aaaa',
    message: 'xxxx',
    createAt: null,
  }

  return (
    <div>
      <div>
        <ul>
          {chats.map((chat) => {
            return (
              <li key={chat.chatText}>
                <Message nick={message.nick} message={chat.chatText} createAt={message.createAt} />
              </li>
            )
          })}
        </ul>
      </div>

      <form onSubmit={handleOnSubmit}>
        <input value={newMessage} onChange={handleOnChange} type="text" />
        <button type="submit">전송</button>
      </form>
    </div>
  )
}

export default Channel
