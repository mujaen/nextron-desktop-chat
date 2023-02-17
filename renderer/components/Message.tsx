function Message({ profile, nick, message, createAt }) {
  if (!message) return null

  return (
    <div>
      <div>{profile}</div>
      <div>{nick}</div>
      <div>{message}</div>
      <time>{createAt}</time>
    </div>
  )
}

export default Message
