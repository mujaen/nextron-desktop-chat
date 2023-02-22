import React, { useState } from 'react'

import Message from './Message'

import { db } from '../firebase/firebaseClient'
import { collection, addDoc, serverTimestamp, orderBy, limit, query } from 'firebase/firestore'
import { User } from 'firebase/auth'

import { useFirebaseQuery } from '../hook/useFirebaseQuery'
import { formatDate } from '../utils/date'

interface ChannelProps {
  id: string
  currentUser: Pick<User, 'displayName' | 'photoURL' | 'uid'>
}

function Channel({ id, currentUser }: ChannelProps) {
  const [newMessage, setNewMessage] = useState<string>('')
  const docRef = collection(db, `collection-${id}`)

  const handleOnChange = (e) => {
    setNewMessage(e.target.value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    addDoc(docRef, {
      uid: currentUser?.uid,
      displayName: currentUser?.displayName,
      photoURL: currentUser?.photoURL,
      message: newMessage,
      createdAt: serverTimestamp(),
    })
  }

  const chats = useFirebaseQuery(query(docRef, orderBy('createdAt'), limit(100)))

  return (
    <div>
      <div>
        <ul>
          {chats &&
            chats.map((chat) => {
              return (
                <li key={chat.message}>
                  <Message
                    id={chat.uid}
                    nick={chat.displayName}
                    message={chat.message}
                    createdAt={formatDate(chat.createdAt)}
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
