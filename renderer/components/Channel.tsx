import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthProvider'
import Message from './Message'

import { db } from '../firebase/firebaseClient'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

function Channel({ id }) {
  const [newMessage, setNewMessage] = useState<string>('')
  const docRef = collection(db, `collection-${id}`)
  const { user } = useAuthContext()

  const handleOnChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    addDoc(docRef, {
      displayName: user.displayName,
      photoURL: '',
      message: newMessage,
      createdAt: serverTimestamp(),
    })
  }

  const chats = [{ message: '', displayName: '', createdAt: '2023-02-20' }]

  return (
    <div>
      <div>
        <ul>
          {chats &&
            chats.map((chat) => {
              return (
                <li key={chat.message}>
                  <Message
                    nick={chat.displayName}
                    message={chat.message}
                    createdAt={chat.createdAt}
                  />
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
