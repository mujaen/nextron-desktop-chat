import React from 'react'

interface AvatarProps {
  src: string
  alt: string
  size?: AvatarSizeType
}

type AvatarSizeType = {
  width: number
  height: number
}

function Avatar({ src, alt = '', size = { width: 40, height: 40 } }: AvatarProps) {
  return (
    <div className="overflow-hidden rounded-lg">
      <img
        src={src ? src : '/images/avatar.jpg'}
        alt={alt}
        width={size.width}
        height={size.height}
      />
    </div>
  )
}

export default Avatar
