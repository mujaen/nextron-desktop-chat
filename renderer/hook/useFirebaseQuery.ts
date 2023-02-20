import React, { useState, useEffect, useRef } from 'react'

import { queryEqual, onSnapshot } from 'firebase/firestore'

export const useFirebaseQuery = (query) => {
  const [docs, setDocs] = useState([])
  const queryRef = useRef(query)

  useEffect(() => {
    if (!queryEqual(queryRef?.current, query)) {
      queryRef.current = query
    }
  }, [])

  useEffect(() => {
    if (!queryRef.current) {
      return null
    }

    const unsubscribe = onSnapshot(queryRef.current, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))

      setDocs(data)
    })

    return unsubscribe
  }, [queryRef])

  return docs
}
