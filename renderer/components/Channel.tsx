import React, { useState, useMemo } from 'react'

import Message from './Message'

import { db } from '../firebase/firebaseClient'
import { collection, addDoc, serverTimestamp, orderBy, limit, query } from 'firebase/firestore'
import { User } from 'firebase/auth'

import { useFirebaseQuery } from '../hook/useFirebaseQuery'
import { formatDate } from '../utils/date'
import _ from 'lodash'

interface ChannelProps {
  id: string
  currentUser: Pick<User, 'displayName' | 'photoURL' | 'uid'>
}

function Channel({ id, currentUser }: ChannelProps) {
  const [newMessage, setNewMessage] = useState<string>('')
  const docRef = collection(db, `collection-${id}`)

  const colorVariants = {
    active: 'bg-sky-500 text-white',
    inactive: 'bg-gray-200 text-gray-400',
  }

  const isDirty = !_.isEmpty(newMessage)

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

    setNewMessage('')
  }

  const chats = useFirebaseQuery(query(docRef, orderBy('createdAt'), limit(100)))

  return (
    <div className="h-screen bg-gray-100">
      <div className="mb-8 p-1">
        <ul>
          {chats &&
            chats.map((chat) => {
              return (
                <li key={chat.message}>
                  <Message
                    id={chat.uid}
                    nick={chat.displayName}
                    message={chat.message}
                    thumb={chat.photoURL}
                    createdAt={formatDate(chat.createdAt)}
                  />
                </li>
              )
            })}
        </ul>
      </div>

      <form onSubmit={handleOnSubmit} className="fixed bottom-0 w-full bg-white">
        <div className="flex justify-between">
          <input
            value={newMessage}
            onChange={handleOnChange}
            type="text"
            placeholder="Write a message..."
            className="w-full px-2 text-sm"
          />
          <button
            type="submit"
            className={`min-w-[70px] py-2 text-sm ${
              colorVariants[isDirty ? 'active' : 'inactive']
            }`}
          >
            전송
          </button>
        </div>
      </form>
    </div>
  )
}

export default Channel
