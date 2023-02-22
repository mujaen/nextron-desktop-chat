function Message({ id, nick, message, createdAt }) {
  if (!message) return null

  return (
    <div>
      <div>{id}</div>
      <div>{nick}</div>
      <div>{message}</div>
      <time>{createdAt}</time>
    </div>
  )
}

export default Message
